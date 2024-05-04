import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/settings';
import { User } from '../model/types/user';

interface SetJsonSettginsProps {
    userId: string,
    jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        setJsonSettings: builder.mutation<User, SetJsonSettginsProps>({
            query: ({ jsonSettings, userId }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: builder.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettings = userApi.endpoints.setJsonSettings.initiate;

export const getUserById = userApi.endpoints.getUserDataById.initiate;
