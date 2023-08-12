//import the required functions and hooks from various places for this code to work
import { useDispatch, useSelector } from "react-redux";
import { newGuess } from "../../store/guessedLetters";
import { addOne } from "../../store/hangmanState";
import { gameLost, gameWon } from "../../store/gameState";
import { useEffect } from "react";

const DisplayLetters = () => {
    const dispatch = useDispatch();

    //get various states from store
    const currentWord = useSelector((state) => state.wordToGuess.value);
    const lettersGuessed = useSelector((state) => state.guessedLetters.value);
    const hangmanValue = useSelector((state) => state.hangmanState.value);

    //array representing the alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //function for handling letter clicks (also called on event listener). If the letter that has just been clicked is already
    //in the lettersGuessed break out of the code block else add the new letter to the lettersGuessed array.
    //before the letter gets added, we check to see if the current hangman value + 1 === 11, if so end the game as lost
    //if not add one to the hangman value
    const handleClick = (letter) => {
        if (lettersGuessed.includes(letter)) {
            return; // Exit if the letter has already been guessed
        } else {
            if (!currentWord.includes(letter)) {
                if (hangmanValue + 1 === 11) {
                    dispatch(gameLost()); // Dispatch gameLost action if hangmanValue is about to reach maximum
                } else {
                    dispatch(addOne()); // Dispatch addOne action to increment hangman state
                }
            }
            dispatch(newGuess(letter)); // Dispatch newGuess action to add the letter to guessedLetters
        }
    }

    //function to check if game has been won. loop through the current word array and if any letter hasn't beeen guessed
    //return false. if all letters in the word have been guessed return true, to update the gameState in the useEffect
    const isGameWon = () => {
        for (let i = 0; i < currentWord.length; i++) {
            if (!lettersGuessed.includes(currentWord[i])) {
                return false;
            }
        }
        return true;
    }

    //run useEffect to run on any changes that happen, which also allows for the keydown event listener
    useEffect(() => {

        //function for handling keydown. Checks to make sure that the key pressed is in the alphabet array, if it is then call
        //handleClick function
        const handleKeydown = (e) => {
            const availableKeypress = alphabet.includes(e.key);
            if (availableKeypress) {
                handleClick(e.key);
            }
        }

        document.addEventListener("keydown", handleKeydown);

        //if the isGameWon function returns true then update gameState to won
        if (isGameWon()) {
            dispatch(gameWon());
        }

        //i was having issues with the letter being pushed to the handleClick function multiple times, so I found this solution here:
        //https://stackoverflow.com/questions/64434545/react-keydown-event-listener-is-being-called-multiple-times
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        }
    });

    //render individual letter buttons
    const showLetterBtn = (lttr, idx) => {
        const alreadyGuessed = lettersGuessed.includes(lttr);
        return (
            <button key={idx}
                className={`btn btn-lg me-1 mb-1 ${alreadyGuessed ? "btn-secondary" : "btn-primary"}`}
                onClick={() => handleClick(lttr)}
                disabled={alreadyGuessed}>{lttr}</button>
        );
    }

    return (
        <>
            { /* map through the alphabet array calling function to render individual buttos for each letter */}
            {alphabet.map((lttr, idx) => showLetterBtn(lttr, idx))}
        </>
    );
}

export default DisplayLetters;
