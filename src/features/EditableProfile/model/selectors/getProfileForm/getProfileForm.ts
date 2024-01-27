import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
