import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getLoginLoading = (state: StateSchema) => state.loginForm?.isLoading || false;
