import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnimalData } from '../hooks/useAnimals';

interface ResultState {
    randomResult: AnimalData[];
}

const initialState: ResultState = {
    randomResult: [],
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        handleResult: (state, action: PayloadAction<AnimalData[]>) => {
            state.randomResult = action.payload;
        },
        resetResult(state) {
            state.randomResult = [];
        },
    },
});

export const { handleResult, resetResult } = resultSlice.actions;
export default resultSlice.reducer;
