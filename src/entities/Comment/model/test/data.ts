import { userTest } from 'entities/User/model/test/data';
import { Comment } from '../types/comment';

export const commentTest: Comment = {
    id: '1',
    text: 'text comment',
    user: userTest,
};
