import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarkState {
    bookmarkedIds: string[];
}

const initialState: BookmarkState = {
    bookmarkedIds: JSON.parse(localStorage.getItem('bookmarkedIds') || '[]'), //문자열을 파싱
};

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        toggleBookmark: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const index = state.bookmarkedIds.indexOf(id);

            if (index !== -1) {
                //배열에 있으면
                state.bookmarkedIds.splice(index, 1); //해당 아이디 제거
            } else {
                state.bookmarkedIds.push(id);
            }

            localStorage.setItem('bookmarkedIds', JSON.stringify(state.bookmarkedIds));
        },
    },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
