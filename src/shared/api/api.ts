import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider';
import axios from 'axios';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorizations: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || '',
    },
});
