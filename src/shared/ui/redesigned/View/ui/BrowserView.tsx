import { FC, memo, ReactNode } from 'react';
import { useDevice } from '@/shared/lib/hooks/useDevice';

interface BrowserViewProps {
    children?: ReactNode,
}

/**
 * Отрисовывает внутренний компонент если девайс - браузер
 */
export const BrowserView: FC<BrowserViewProps> = memo((props: BrowserViewProps) => {
    const {
        children,
    } = props;

    const isMobile = useDevice();

    if (isMobile) {
        return null;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
});
