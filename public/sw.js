/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
    const cacheKey = 'MyFancyCacheName_v1';
    console.log('[Service Worker] Installing', event);

    event.waitUntil(
        caches.open(cacheKey).then((cache) => {
            console.log(
                '[Service Worker] Предварительное кэширование оболочки приложения',
            );
            cache
                .addAll([
                    'https://fonts.gstatic.com/s/nunitosans/v15/pe0AMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfUVwoNnq4CLz0_kJ3xzA.woff2',
                    'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Ubuntu:wght@300;400;500;700&display=swap',
                    'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
                ])
                .then(() =>
                    console.log('[Service Worker] Кеширование закончено'),
                );
        }),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        }),
    );
});
