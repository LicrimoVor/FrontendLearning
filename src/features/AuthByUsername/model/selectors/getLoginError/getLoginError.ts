import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getLoginError = (state: StateSchema) => state.loginForm?.error;
