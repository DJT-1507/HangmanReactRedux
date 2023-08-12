//import function from react/redux/actions from store
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newGame } from "../store/gameState";

//import jsx components
import DisplayHangman from "./InPlay/DisplayHangman";
import DisplayWord from "./InPlay/DisplayWord";
import DisplayLetters from "./InPlay/DisplayLetters";

const GameInPlay = () => {
    //state variable to showing/hiding the help section
    const [displayHelp, setDisplayHelp] = useState("hidden");
    const dispatch = useDispatch();

    return (
        <>
            { /* This section is the game help section, the visibility is hidden by default, but when the user presses the "help" button
            the state variable is updated which in turn changes visibilty to visible */ }
            <div id="helpPopup" className="text-center" style={{ visibility: displayHelp }}>
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                            <h1>How to play:</h1>
                            <p>Hangman is a word game, which you must guess the randomly chosen word 1 letter at a time.</p>
                            <p>If you guess a letter correctly then that letter will be shown in its correct place within the word to guess.</p>
                            <p>If you guess a letter incorrectly then another part of the Hangman will be drawn. You are only allowed 11 incorrect guesses before its game over!</p>
                            { /* button to close help, changes visibility back to hidden */ }
                            <button className="btn btn-success btn-lg"
                                onClick={() => setDisplayHelp("hidden")}>Okay, i'm ready!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*main content section, uses the jsx components imported at top*/}
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center p-3">
                        <h1>Hangman</h1>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 p-3 text-center">
                        <div>
                            {/*clik the help button to display help, click the new game button to start new game */}
                            <button className="btn btn-warning btn-sm me-2"
                                onClick={() => setDisplayHelp("visible")}>Help</button>
                            <button className="btn btn-danger btn-sm"
                                onClick={() => dispatch(newGame())}>New game</button>
                        </div>
                        <DisplayHangman />
                    </div>
                    <div className="col-lg-6 wordArea">
                        <div className="row">
                            <div className="col p-3">
                                <DisplayWord />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col p-3 text-center">
                                <DisplayLetters />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameInPlay;
