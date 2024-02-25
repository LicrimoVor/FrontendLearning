import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getUserInited = (state: StateSchema) => state.user._inited;
