import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from './gameState';
import hangmanReducer from "./hangmanState";
import wordToGuessReducer from './wordToGuess';
import guessedLettersReducer from "./guessedLetters";

//redux store with all reducers imported so that the actions can be used throughout the app

export default configureStore({
    reducer: {
        gameState: gameStateReducer,
        hangmanState: hangmanReducer,
        wordToGuess: wordToGuessReducer,
        guessedLetters: guessedLettersReducer
    }
});
