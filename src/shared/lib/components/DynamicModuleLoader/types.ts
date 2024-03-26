import { Reducer } from '@reduxjs/toolkit';

import { StateSchema, StateSchemaKey } from '@/shared/config/reduxConfig/stateShema';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}
