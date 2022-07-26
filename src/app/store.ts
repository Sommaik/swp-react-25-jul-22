import { configureStore } from '@reduxjs/toolkit';
import { TypeOfExpression } from 'typescript';
import { counterReducer } from './counter-slice';

export const store = configureStore ({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;