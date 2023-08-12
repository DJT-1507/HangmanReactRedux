//import redux and store functions
import { useDispatch } from "react-redux";
import { newGame } from "../store/gameState";

//import jsx components to display the word that the user guessed and the current hangman state
import DisplayHangman from "./InPlay/DisplayHangman";
import DisplayWord from "./InPlay/DisplayWord";

const GameWon = () => {
    const dispatch = useDispatch();

    //this updates the UI based on a game win, shows the hangman state for the game, the word guessed and button to start again
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center p-3">
                        <h1>Congratulations</h1>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 p-3 text-center">
                        <DisplayHangman />
                    </div>
                    <div className="col-lg-6 bg-success-subtle text-center border rounded-2 py-5">
                        <h3>Congratulations! You guessed the correct word!</h3>
                        <DisplayWord />
                        <button className="btn btn-success btn-lg mt-3"
                            onClick={() => dispatch(newGame())}>Start again!</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameWon;
