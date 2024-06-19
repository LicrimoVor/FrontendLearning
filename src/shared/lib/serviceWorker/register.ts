import { checkValidServiceWorker, registerValidSW } from './lib/checkValidServiceWorker';
import { Config } from './types/config';

const isLocalhost = Boolean(
    window.location.hostname === 'localhost'
      || window.location.hostname === '[::1]'
      || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

export function register(config?: Config) {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = '/sw.js';

            if (__IS_DEV__) {
                checkValidServiceWorker(swUrl, config);
            } else {
                registerValidSW(swUrl, config);
            }
        });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister()
                .then(() => console.log('[Service Worker] Unregister success'))
                .catch(() => console.log('[Service Worker] Unregister error'));
        });
    }
}
