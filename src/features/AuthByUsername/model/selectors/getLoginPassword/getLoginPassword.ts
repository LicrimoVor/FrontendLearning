import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password || '';
