import { FC, memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { DeprecatedSidebar } from './SidebarDep';
import { RedesignedSidebar } from './SidebarRed';

interface SidebarProps {
  className?: string
}

/** Боковая панель */
export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<DeprecatedSidebar className={className} />}
            on={<RedesignedSidebar className={className} />}
        />
    );
});
