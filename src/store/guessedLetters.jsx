import { createSlice } from "@reduxjs/toolkit";

//all the letters that are guessed get pushed into the state array witht he newGuess reducer and the resetLetters reducer
//sets the state back to an empty array
export const guessedLettersSlice = createSlice({
    name: "guessedLetters",
    initialState: {
        value: []
    },
    reducers: {
        newGuess: (state, action) => {
            state.value.push(action.payload);
        },
        resetLetters: (state) => {
            state.value = [];
        }
    }
});

export const { newGuess, resetLetters } = guessedLettersSlice.actions;

export default guessedLettersSlice.reducer;
