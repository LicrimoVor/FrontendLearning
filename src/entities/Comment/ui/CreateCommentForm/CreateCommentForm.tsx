import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { getCreateCommentError, getCreateCommentText } from '../../model/selectors/createComment';
import { createCommentActions, createCommentReducer } from '../../model/slice/createCommentSlice';
import cls from './CreateCommentForm.module.scss';

export interface CreateCommentFormProps {
    className?: string,
    onCommentSend: (text: string) => void,
}

const reducers: ReducerList = {
    createCommentForm: createCommentReducer,
};

/** Форма создания комментария */
const CreateCommentForm: FC<CreateCommentFormProps> = memo((
    props: CreateCommentFormProps,
) => {
    const {
        className,
        onCommentSend,
    } = props;

    const { t } = useTranslation();
    const text = useSelector(getCreateCommentText);
    const error = useSelector(getCreateCommentError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(createCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentSend(text || '');
        onCommentTextChange('');
    }, [onCommentSend, text, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max className={classNames(cls.CreateCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Enter a comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default CreateCommentForm;
