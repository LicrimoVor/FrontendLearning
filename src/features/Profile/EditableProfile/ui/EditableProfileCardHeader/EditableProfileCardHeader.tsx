import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getUserAuthData } from '@/entities/User';

import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string,
}

/** Шапка профиля */
export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((
    props: EditableProfileCardHeaderProps,
) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const {
        className,
    } = props;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

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
