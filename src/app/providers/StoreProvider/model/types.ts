import { createReduxStore } from '@/shared/config/reduxConfig/reduxConfig';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
