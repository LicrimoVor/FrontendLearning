import { FC, lazy } from 'react';
import { CreateCommentFormProps } from './CreateCommentForm';

export const CreateCommentFormAsync = lazy<FC<CreateCommentFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./CreateCommentForm')), 1500);
    }),
);
