/* eslint-disable no-restricted-globals */
const CACHE_KEY = 'my-cache-key';
const ASSETS_CACHE = [];

// Достаем из кеша.
function fromCache(request) {
    return caches.open(CACHE_KEY)
        .then((cache) => cache.match(request));
}

// Обновляем кеш.
function update(request, response) {
    return caches.open(CACHE_KEY)
        .then((cache) => cache.put(request, response));
}

self.addEventListener('install', (ev) => {
    console.log('[Service Worker] Installing', ev);
    ev.waitUntil(caches
        .open(CACHE_KEY)
        .then((cache) => {
            console.log(
                '[Service Worker] Предварительное кэширование оболочки приложения',
            );
            cache
                .addAll(ASSETS_CACHE)
                .then(() => console.log('[Service Worker] Кеширование закончено'))
                .then(() => self.skipWaiting());
        }));
});

self.addEventListener('activate', (ev) => {
    ev.waitUntil((async () => {
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
        await caches
            .keys()
            .then((keys) => Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_KEY) {
                        return caches.delete(key);
                    }
                    return undefined;
                }),
            ));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', (ev) => {
    ev.respondWith((async () => {
        if (navigator.onLine) {
            const preloadResponse = await ev.preloadResponse;
            if (preloadResponse) {
                return preloadResponse;
            }
        }

        if (ASSETS_CACHE.includes(ev.request.url)) {
            return fromCache(ev.request);
        }

        const response = await fetch(ev.request)
            .then((response) => {
                // if (!response.ok) return fromCache(ev.request);
                if (response.url.indexOf('http') === 0) update(ev.request, response.clone());
                return response;
            })
            .catch((err) => {
                console.log(`[Service Worker] Error: ${err}`);
                return fromCache(ev.request);
            });
        return response;
    })());
});
