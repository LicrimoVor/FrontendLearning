import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string,
    canEdit?: boolean,
    readonly?: boolean,
    onEdit: () => void,
    onCancelEdit: () => void,
    onSave: () => void,
    isLoading?: boolean,
    loadingEditable: boolean,
}

/** Шапка профиля */
export const EditableProfileCardHeaderRed: FC<EditableProfileCardHeaderProps> = memo((
    props: EditableProfileCardHeaderProps,
) => {
    const {
        className,
        canEdit,
        readonly,
        onEdit,
        onCancelEdit,
        onSave,
        isLoading,
        loadingEditable,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.ProfilePageHeader, {}, [className])}
                data-testid="EditableProfileCardHeader"
            >
                <Text title={t('Profile')} />
                {loadingEditable && <Skeleton className={cls.editBtn} height={44} width={100} border="32px" />}
            </HStack>
        );
    }

    return (
        <HStack
            className={classNames(cls.ProfilePageHeader, {}, [className])}
            data-testid="EditableProfileCardHeader"
        >
            <Text title={t('Profile')} />
            {canEdit && (
                readonly ? (
                    <Button
                        variant="outline"
                        className={cls.editBtn}
                        onClick={onEdit}
                        data-testid="EditableProfileCardHeader.edit"
                    >
                        {t('Edit')}
                    </Button>
                ) : (
                    <>
                        <Button
                            variant="outline"
                            className={cls.cancelBtn}
                            onClick={onCancelEdit}
                            data-testid="EditableProfileCardHeader.cancel"
                            color="error"
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            variant="outline"
                            className={cls.saveBtn}
                            onClick={onSave}
                            data-testid="EditableProfileCardHeader.save"
                            color="success"
                        >
                            {t('Save')}
                        </Button>
                    </>
                )
            )}
        </HStack>
    );
});
