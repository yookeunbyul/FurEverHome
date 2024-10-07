import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    matchingState: {
        species: '',
        gender: '',
        weight: '',
        color: '',
    },
};

const matchingSlice = createSlice({
    name: 'matching',
    initialState,
    reducers: {
        setSpecies: (state, action: PayloadAction<string>) => {
            state.matchingState.species = action.payload; // 품종 업데이트
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.matchingState.gender = action.payload; // 성별 업데이트
        },
        setWeight: (state, action: PayloadAction<string>) => {
            state.matchingState.weight = action.payload; // 무게 업데이트
        },
        setColor: (state, action: PayloadAction<string>) => {
            state.matchingState.color = action.payload; // 색상 업데이트
        },
        resetMatchingState(state) {
            // 모든 상태 초기화
            state.matchingState.species = '';
            state.matchingState.gender = '';
            state.matchingState.weight = '';
            state.matchingState.color = '';
        },
    },
});

// 액션 생성자 내보내기
export const { setSpecies, setGender, setWeight, setColor, resetMatchingState } = matchingSlice.actions;

// 리듀서 내보내기
export default matchingSlice.reducer;
