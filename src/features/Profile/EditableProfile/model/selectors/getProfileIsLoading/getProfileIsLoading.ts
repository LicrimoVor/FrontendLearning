import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
