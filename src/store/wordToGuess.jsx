import { createSlice } from "@reduxjs/toolkit";

//this holds the word to guess in an array format, when starting a new game, the word that is chosed in looped through with the
//individual letter being pushed in the state array with the newWord action. the emptyWord action sets the sate back to an
//empty array
export const wordToGuessSlice = createSlice({
    name: "wordToGuess",
    initialState: {
        value: []
    },
    reducers: {
        newWord: (state, action) => {
            state.value.push(action.payload);
        },
        emptyWord: (state) => {
            state.value = [];
        }
    }
});

export const { newWord, emptyWord } = wordToGuessSlice.actions;

export default wordToGuessSlice.reducer;
