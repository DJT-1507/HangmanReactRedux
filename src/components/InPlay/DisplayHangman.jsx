//import images and useSelector to update state
import images from "../../images/imgImporter";
import { useSelector } from "react-redux";

const DisplayHangman = () => {
    //useSelector to get the hangman state
    const hangmanState = useSelector((state) => state.hangmanState.value);

    //create a function for the word representation of the current hangman number state. Start from zero as array indexes
    //start from 0, this could also be done by taking one away from the value passed into the function. This is done
    //as the images are imported as variables with the spelling of the number
    const numberToWord = (number) => {
        // An array containing word representations of numbers from 0 to 11
        const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
            "nine", "ten", "eleven"];

        //return the word representation of the given number
        return words[number];
    }

    //return the image
    return (
        <>
            <img src={images[numberToWord(hangmanState)]} alt={`State ${hangmanState}`} />
        </>
    );
}

export default DisplayHangman;
