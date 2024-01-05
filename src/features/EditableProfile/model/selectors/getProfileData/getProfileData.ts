import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getProfileData = (state: StateSchema) => state.profile?.data;
