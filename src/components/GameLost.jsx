//import redux functions and the last hangman state image
import { useDispatch } from "react-redux";
import { newGame } from "../store/gameState";
import image from "../images/state11.gif";

const GameLost = () => {
    const dispatch = useDispatch();

    //this displays the UI for the game over (lost game)
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center p-3">
                        <h1>Game Over!</h1>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 p-3 text-center">
                        {/* final hangman state image */}
                        <img src={image} alt="Game Over" />
                    </div>
                    <div className="col-lg-6 bg-danger-subtle text-center border rounded-2 py-5">
                        <h3>Sorry, you didn't guess the word correctly!</h3>
                        {/* button to start new game */}
                        <button className="btn btn-success btn-lg mt-3"
                            onClick={() => dispatch(newGame())}>Start again!</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameLost;
