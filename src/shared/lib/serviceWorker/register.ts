import { checkValidServiceWorker, registerValidSW } from './lib/checkValidServiceWorker';
import { Config } from './types/config';

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
