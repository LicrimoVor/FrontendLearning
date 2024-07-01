import { useCallback, useState } from 'react';

const getFonts = async () => (
    Promise.all([
        import('../styles/fonts/sans.scss'),
        import('../styles/fonts/ubuntu.scss'),
    ])
);

export const useGetFonts = () => {
    const [init, setInit] = useState(false);

    const getFontsHandler = useCallback(() => {
        if (!init) {
            getFonts().then(() => {
                setInit(true);
            });
        }
    }, [setInit, init]);

    return {
        getFonts: getFontsHandler,
        init,
    };
};
