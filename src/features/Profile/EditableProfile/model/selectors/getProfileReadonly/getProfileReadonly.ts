import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
