import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getSidebarCollapsed } from '@/shared/config/options';

import { MainLayout } from '../../MainLayout';
import cls from './AppLoaderLayout.module.scss';

/** Loader для app */
export const AppLoaderLayout: FC = memo(() => {
    const collapsed = useSelector(getSidebarCollapsed);

    return (
        <MainLayout
            header={(
                <HStack className={cls.header} gap={16}>
                    <Skeleton width={40} height={40} border="50%" />
                    <Skeleton width={40} height={40} border="50%" />
                </HStack>
            )}
            content={(
                <VStack gap={16} className={cls.content} max align="center">
                    <Skeleton width="70%" height={72} border="16px" />
                    <Skeleton width="50%" height={52} border="16px" />
                    <Skeleton width="80%" height="60%" border="16px" />
                    <Skeleton width="80%" height="20%" border="16px" />
                </VStack>
            )}
            sidebar={<Skeleton border="32px" width={collapsed ? 50 : 220} height="100%" />}
        />
    );
});
