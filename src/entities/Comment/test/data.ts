import { userTest } from '@/entities/User/testing';
import { Comment } from '../model/types/comment';

export const commentTest: Comment = {
    id: '1',
    text: 'text comment',
    user: userTest,
};
