//import useSelector so we can get the gameState value
import { useSelector } from "react-redux";

//import jsx components
import StartNewGame from "./components/StartNewGame";
import GameInPlay from "./components/GameInPlay";
import GameWon from "./components/GameWon";
import GameLost from "./components/GameLost";

//using and if/else if/else code block we can display different components to the user depending on the gameState value
const App = () => {
    const gameState = useSelector((state) => state.gameState.value);

    if (gameState === "not-started") {
        return (
            <>
                <StartNewGame />
            </>
        );
    } else if (gameState === "game-won") {
        return (
            <>
                <GameWon />
            </>
        );
    } else if (gameState === "game-lost") {
        return (
            <>
                <GameLost />
            </>
        );
    } else {
        return (
            <>
                <GameInPlay />
            </>
        );
    }
}

export default App;
