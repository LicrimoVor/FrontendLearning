import { FC, memo, ReactNode } from 'react';
import { useDevice } from '@/shared/lib/hooks/useDevice';

interface MobileViewProps {
    children?: ReactNode,
}

/** Отрисовывает внутренний компонент если девайс - телефон */
export const MobileView: FC<MobileViewProps> = memo((props: MobileViewProps) => {
    const {
        children,
    } = props;

    const isMobile = useDevice();

    if (!isMobile) {
        return null;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
});
