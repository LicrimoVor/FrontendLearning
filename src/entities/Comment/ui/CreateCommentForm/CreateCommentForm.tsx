import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

import { getCreateCommentText } from '../../model/selectors/createComment';
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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <HStack
                        max
                        className={classNames(cls.CreateCommentForm, {}, [className])}
                        data-testid="CreateCommentForm"
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Enter a comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="CreateCommentForm.input"
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="CreateCommentForm.send"
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </HStack>
                )}
                on={(
                    <HStack
                        max
                        className={className}
                        data-testid="CreateCommentForm"
                        gap={24}
                    >
                        <Input
                            className={cls.input}
                            placeholder={t('Enter a comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="CreateCommentForm.input"
                        />
                        <Button
                            onClick={onSendHandler}
                            data-testid="CreateCommentForm.send"
                        >
                            {t('Send')}
                        </Button>
                    </HStack>
                )}
            />
        </DynamicModuleLoader>
    );
});

export default CreateCommentForm;
