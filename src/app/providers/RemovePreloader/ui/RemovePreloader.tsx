import { FC, memo, ReactElement } from 'react';

import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect';

interface RemovePreloaderProps {
    children?: ReactElement,
}

/** Удаление пред-загрузчика */
export const RemovePreloader: FC <RemovePreloaderProps> = memo((
    props: RemovePreloaderProps,
) => {
    const {
        children,
    } = props;

    useInitialEffect(() => {
        const preload = document.querySelector('#preload');
        preload?.remove();
    });

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
});
