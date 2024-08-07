import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    userData: {
        name: string;
        email: string;
        // progress: number;
    } | null;
}

const initialState: ProfileState = {
    userData: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<{ name: string; email: string; progress: number; }>) => {
            state.userData = action.payload;
        },
        clearUserData: (state) => {
            state.userData = null;
        },
    },
});

export const { setUserData, clearUserData } = profileSlice.actions;
export default profileSlice.reducer;
