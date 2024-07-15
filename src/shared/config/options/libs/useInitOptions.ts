import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { optionsActions } from '../model/slice';

export const useInitOptions = () => {
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        window.addEventListener('offline', () => dispatch(optionsActions.setOnline(false)));
        window.addEventListener('online', () => dispatch(optionsActions.setOnline(true)));
        dispatch(optionsActions.initData());
    });
};
