import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AssesmentState {
    assesment: Array<{
        de: string;
        rus: string;
        eng: string;
        option1: string;
        option2: string;
        option3: string;
        option4: string;
    }> | null;
}

const initialState: AssesmentState = {
    assesment: null
};

const AssesmentSlice = createSlice({
    name: 'assesment',
    initialState,
    reducers: {
        setAssesment: (state, action: PayloadAction<Array<{
            de: string;
            eng: string;
            rus: string;
            option1: string;
            option2: string;
            option3: string;
            option4: string;
        }>>) => {
            state.assesment = action.payload;
        },
        terminateAssesment: (state) => {
            state.assesment = null;
        },
    },
});

export const { setAssesment, terminateAssesment } = AssesmentSlice.actions;
export default AssesmentSlice.reducer;
