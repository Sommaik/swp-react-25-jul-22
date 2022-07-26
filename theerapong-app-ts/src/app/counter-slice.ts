import { createSlice } from '@reduxjs/toolkit'

interface ICounter {
    value: number;
}

const initialState: ICounter = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: ICounter) => {
            state.value += 1;
        },
        decrement: (state: ICounter) => {
            state.value += 1;
        },
        incrementByAmount: (state: ICounter, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
export const counterReducer = counterSlice.reducer;