import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getLoginUsername = (state: StateSchema) => state.loginForm?.username || '';
