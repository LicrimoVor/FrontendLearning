import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { getUserAuthData } from '@/entities/User';

import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { EditableProfileCardHeaderDep } from './EditableProfileCardHeaderDep';
import { EditableProfileCardHeaderRed } from './EditableProfileCardHeaderRed';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string,
}

/** Шапка профиля */
export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((
    props: EditableProfileCardHeaderProps,
) => {
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

    const data = {
        canEdit,
        className,
        readonly,
        onEdit,
        onCancelEdit,
        onSave,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<EditableProfileCardHeaderDep {...data} />}
            on={<EditableProfileCardHeaderRed {...data} />}
        />
    );
});
