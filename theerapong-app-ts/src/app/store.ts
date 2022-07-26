import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter-slice'
import { postReducer } from './post-slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;