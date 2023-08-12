import { createSlice } from "@reduxjs/toolkit";

//this is used to determin what state of Hangman the user is at, the state correlate to the image to be displayed.
export const hangmanSlice = createSlice({
    name: "hangmanState",
    initialState: {
        value: 1
    },
    reducers: {
        addOne: (state) => {
            state.value += 1;
        },
        resetToOne: (state) => {
            state.value = 1;
        }
    }
});

export const { addOne, resetToOne } = hangmanSlice.actions;

export default hangmanSlice.reducer;
