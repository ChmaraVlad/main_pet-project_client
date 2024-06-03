// Core
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

// Types
import { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useAppSelector