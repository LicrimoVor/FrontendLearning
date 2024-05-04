import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/settings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state: StateSchema) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
