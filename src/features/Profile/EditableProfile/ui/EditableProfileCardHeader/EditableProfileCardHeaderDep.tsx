import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string,
    canEdit?: boolean,
    readonly?: boolean,
    onEdit: () => void,
    onCancelEdit: () => void,
    onSave: () => void,
}

/**
 * @deprecated
 * Шапка профиля
 */
export const EditableProfileCardHeaderDep: FC<EditableProfileCardHeaderProps> = memo((
    props: EditableProfileCardHeaderProps,
) => {
    const {
        className,
        canEdit,
        readonly,
        onEdit,
        onCancelEdit,
        onSave,
    } = props;

    const { t } = useTranslation('profile');

    return (
        <HStack
            className={classNames(cls.ProfilePageHeader, {}, [className])}
            data-testid="EditableProfileCardHeader"
        >
            <Text title={t('Profile')} />
            {canEdit && (
                readonly ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                        data-testid="EditableProfileCardHeader.edit"
                    >
                        {t('Edit')}
                    </Button>
                ) : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.cancelBtn}
                            onClick={onCancelEdit}
                            data-testid="EditableProfileCardHeader.cancel"
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.saveBtn}
                            onClick={onSave}
                            data-testid="EditableProfileCardHeader.save"
                        >
                            {t('Save')}
                        </Button>
                    </>
                )
            )}
        </HStack>
    );
});
