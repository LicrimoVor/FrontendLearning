import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

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
            <div
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('LoginForm')} />
                <Input
                    type="text"
                    data-testid="username"
                    className={cls.input}
                    placeholder={t('EnterUsername')}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    data-testid="password"
                    className={cls.input}
                    placeholder={t('EnterPassword')}
                    onChange={onChangePassword}
                    value={password}
                />
                <div className={cls.footerContent}>
                    {error && (
                        <Text
                            className={cls.error}
                            text={t('Wrong username or password')}
                            theme={TextTheme.ERROR}
                        />
                    )}
                    <Button
                        className={cls.loginBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Login')}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
