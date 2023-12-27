import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
