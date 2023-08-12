//import useSelector to access store
import { useSelector } from "react-redux";

const DisplayWord = () => {
    //get wordToGuess and guessedLetters values from the store
    const wordToGuess = useSelector((state) => state.wordToGuess.value);
    const lettersGuessed = useSelector((state) => state.guessedLetters.value);

    //this function displays either the letter if it has been guessed or a blank space
    const showLetter = (letter, idx) => {
        const hasBeenGuessed = lettersGuessed.includes(letter);

        return (
            <span key={idx} className="letterDisplay">
                { hasBeenGuessed ? letter : " " }
            </span>
        );
    }

    return (
        <div className="d-flex justify-content-center">
            {/* map through wordToGuess and display either the letter or a space with the showLetter function */}
            { wordToGuess.map((letter, idx) => showLetter(letter, idx)) }
        </div>
    );
}

export default DisplayWord;
