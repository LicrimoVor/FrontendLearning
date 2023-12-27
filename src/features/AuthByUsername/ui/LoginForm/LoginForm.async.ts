import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => new Promise<any>((resolve) => {
        setTimeout(() => resolve(import('./LoginForm')), 1000);
    }),
);
