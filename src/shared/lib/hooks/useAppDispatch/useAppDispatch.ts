import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../../app/providers/StoreProvider';

/** Аннотируемый хук для диспатча */
export const useAppDispatch = () => useDispatch<AppDispatch>();
