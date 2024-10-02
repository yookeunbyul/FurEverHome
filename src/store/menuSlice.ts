import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isShowMenu: false,
    },
    reducers: {
        handleMenu: (state) => {
            state.isShowMenu = !state.isShowMenu;
        },
        handleVisibility: (state, action: PayloadAction<boolean>) => {
            state.isShowMenu = action.payload;
        },
    },
});

export const { handleMenu, handleVisibility } = menuSlice.actions;
export default menuSlice.reducer;
