import {
    FC, memo, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getUserAuthData } from '@/entities/User';

import cls from './UiDesignedSwitcher.module.scss';

interface UiDesignedSwitcherProps {
    className?: string,
}

/** Докстринг */
export const UiDesignedSwitcher: FC<UiDesignedSwitcherProps> = memo((
    props: UiDesignedSwitcherProps,
) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const items = useMemo(() => [
        {
            content: t('new'),
            value: 'new',
        },
        {
            content: t('old'),
            value: 'old',
        },
    ], [t]);

    const onChange = useCallback(async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlags({
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
                userId: authData.id,
            })).unwrap();
            setIsLoading(false);
        }
    }, [authData, dispatch]);

    if (isLoading) {
        return <Skeleton width={300} height={40} />;
    }

    return (
        <HStack className={classNames(cls.UiDesignedSwitcher, {}, [className])}>
            <Text text={t('Varaint interface')} />
            <ListBox
                selectedValue={isAppRedesigned ? 'new' : 'old'}
                data={items}
                onChange={onChange}
            />
        </HStack>
    );
});
