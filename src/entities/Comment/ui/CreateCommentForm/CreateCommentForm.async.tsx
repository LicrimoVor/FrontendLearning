import { FC, lazy } from 'react';
import { CreateCommentFormProps } from './CreateCommentForm';

export const CreateCommentFormAsync = lazy<FC<CreateCommentFormProps>>(
    () => import('./CreateCommentForm'),
);
