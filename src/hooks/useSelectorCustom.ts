// Core
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

// Types
import { RootState } from '../store';

export const useSelectorCustom: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelectorCustom