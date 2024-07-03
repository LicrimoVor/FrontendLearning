import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';

import { ProfileCardProps } from '../model/types/profileProps';
import cls from './ProfileCardRedesigned.module.scss';

const ProfileCardSceleton = memo(() => (
    <Card
        data-testid="ProfileCard"
        max
        border="round"
        padding={32}
    >
        <VStack gap={24} max>
            <HStack justify="center" max>
                <Skeleton height={128} width={128} border="100%" />
            </HStack>
            <HStack gap={24} max>
                <VStack gap={24} max>
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                </VStack>
                <VStack gap={24} max>
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                    <Skeleton height={38} border="8px" />
                </VStack>
            </HStack>
        </VStack>
    </Card>
));

/** Карточка профиля */
export const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastname,
        onChangeUsername,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return <ProfileCardSceleton />;
    }

    if (error) {
        return (
            <VStack
                align="center"
            >
                <Text
                    text={t('Refresh page')}
                    title={t('Error profile')}
                    align="center"
                    variant="error"
                />
            </VStack>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <Card
            className={classNames('', mods, [className])}
            data-testid="ProfileCard"
            max
            border="round"
            padding={32}
        >
            <VStack gap={24} max>
                {data?.avatar && (
                    <HStack justify="center" max>
                        <Avatar size={128} src={data?.avatar} />
                    </HStack>
                )}
                <HStack gap={24} max>
                    <VStack gap={24} max>
                        <Input
                            value={data?.first}
                            label={t('First name')}
                            onChange={onChangeFirstName}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Last name')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.username}
                            label={t('Username')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            data-testid="ProfileCard.username"
                        />
                        <Input
                            value={data?.age}
                            label={t('Age')}
                            onChange={onChangeAge}
                            readonly={readonly}
                            data-testid="ProfileCard.age"
                        />

                    </VStack>
                    <VStack gap={24} max>
                        <Input
                            value={data?.avatar}
                            label={t('Profile avatar')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                            data-testid="ProfileCard.avatar"
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                            data-testid="ProfileCard.currency"
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                            data-testid="ProfileCard.country"
                        />
                        <Input
                            value={data?.city}
                            label={t('City')}
                            onChange={onChangeCity}
                            readonly={readonly}
                            data-testid="ProfileCard.city"
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
