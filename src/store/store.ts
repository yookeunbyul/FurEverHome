import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import bookmarkReducer from './bookmarkSlice';
import matchingReducer from './matchingSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        bookmark: bookmarkReducer,
        matching: matchingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
