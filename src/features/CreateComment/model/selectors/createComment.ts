import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getCreateCommentText = (state: StateSchema) => state.createCommentForm?.text;
export const getCreateCommentError = (state: StateSchema) => state.createCommentForm?.error;
