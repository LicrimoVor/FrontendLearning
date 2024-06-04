export const initServiceWorker = (path: string) => {
    navigator.serviceWorker
        ?.register(path)
        .then((event) => {
            console.log('Service worker registered', event);
        });
};
