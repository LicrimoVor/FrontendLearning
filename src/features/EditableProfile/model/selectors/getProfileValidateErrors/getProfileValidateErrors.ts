import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError;
