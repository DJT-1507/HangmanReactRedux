//import react and redux functions as well as store functions that I created
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/gameState";
import { resetLetters } from "../store/guessedLetters";
import { resetToOne } from "../store/hangmanState";
import { newWord, emptyWord } from "../store/wordToGuess";

//import all the words for 1 to be randomly chosen
import Words from "./Words";

const StartNewGame = () => {
    const dispatch = useDispatch();

    //this function dispatches a few actions to return all of the needed store values to the initialState. 
    const clearAll = () => {
        dispatch(resetLetters());
        dispatch(resetToOne());
        dispatch(emptyWord());
    }

    //this function calls the clearAll function described above, then generats a random number between 0 and 49, and 
    //choses a word from the array with that index. As the game word is stored as an arry, the word is then looped over
    //and each letter is dispatched to the store using the newWord action, and finally the gameState is updated to in-game
    const newGame = () => {
        clearAll();
        
        const randNum = Math.floor(Math.random() * 50);
        const gameWord = Words[randNum];
        
        for(let i = 0; i < gameWord.length; i++) {
            dispatch(newWord(gameWord[i]));
        }
        dispatch(startGame());
    }

    //I use useEffect to call the newGame function and return nothing to the UI for this file
    useEffect(() => {
        newGame();
    });

    return null;
}

export default StartNewGame;
