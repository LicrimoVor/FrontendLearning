import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getProfileError = (state: StateSchema) => state.profile?.error;
