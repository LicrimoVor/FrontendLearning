import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';

import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';

import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string,
    onSuccess: () => void,
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

/** Форма логина пользователя с помощью username */
const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <div
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <TextDeprecated title={t('LoginForm')} />
                        <InputDeprecated
                            type="text"
                            data-testid="username"
                            className={cls.input}
                            placeholder={t('Enter:\\Username')}
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                            size="s"
                        />
                        <InputDeprecated
                            type="text"
                            data-testid="password"
                            className={cls.input}
                            placeholder={t('Enter:\\Password')}
                            onChange={onChangePassword}
                            value={password}
                            size="s"
                        />
                        <div className={cls.footerContent}>
                            {error && (
                                <TextDeprecated
                                    className={cls.error}
                                    text={t('Wrong username or password')}
                                    theme={TextTheme.ERROR}
                                />
                            )}
                            <ButtonDeprecated
                                className={cls.loginBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onLoginClick}
                                disabled={isLoading}
                            >
                                {t('Login')}
                            </ButtonDeprecated>
                        </div>
                    </div>
                )}
                on={(
                    <div
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('LoginForm')} />
                        <Input
                            type="text"
                            data-testid="username"
                            className={cls.input}
                            placeholder={t('Login')}
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type="text"
                            data-testid="password"
                            className={cls.input}
                            placeholder={t('Password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <div className={cls.footerContent}>
                            {error && (
                                <Text
                                    className={cls.error}
                                    text={t('Wrong username or password')}
                                    variant="error"
                                />
                            )}
                            <Button
                                className={cls.loginBtn}
                                variant="outline"
                                onClick={onLoginClick}
                                disabled={isLoading}
                            >
                                {t('LogIn')}
                            </Button>
                        </div>
                    </div>
                )}
            />

        </DynamicModuleLoader>
    );
});

export default LoginForm;
