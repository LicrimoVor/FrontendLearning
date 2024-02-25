import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getLoginState = (state: StateSchema) => state.loginForm;
