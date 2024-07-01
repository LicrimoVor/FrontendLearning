import { StateSchema } from '../../reduxConfig/stateShema';

export const getOptionsIsOnline = (state: StateSchema) => state.options.isOnline;
export const getSidebarCollapsed = (state: StateSchema) => state.options.sidebarCollapsed;
