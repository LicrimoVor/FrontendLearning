import { Config } from '../types/config';

export function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('[Service Worker] Новый контент доступен и будет использован, когда все вкладки на этой странице будут закрыты.');

                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            console.log('[Service Worker] Содержимое кэшируется для использования в автономном режиме');

                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch((error) => {
            console.error('[Service Worker] Ошибка при регистрации service worker:', error);
        });
}

export function checkValidServiceWorker(swUrl: string, config?: Config) {
    fetch(swUrl)
        .then((response) => {
            const contentType = response.headers.get('content-type');
            if (
                response.status === 404
                || (contentType != null && contentType.indexOf('javascript') === -1)
            ) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log('[Service Worker] Не найдено подключение к Интернету. Приложение работает в автономном режиме');
        });
}
