//import the createSlice function from redux
import { createSlice } from "@reduxjs/toolkit";

//in this gameState slice I set the initialState to not started, and create 4 reducers to update the state value to different
//things that will render different components
export const gameStateSlice = createSlice({
    name: "gameState",
    initialState: {
        value: "not-started"
    },
    reducers: {
        startGame: (state) => {
            state.value = "in-game";
        },
        gameLost: (state) => {
            state.value = "game-lost";
        },
        gameWon: (state) => {
            state.value = "game-won";
        },
        newGame: (state) => {
            state.value = "not-started";
        }
    }
});

export const { startGame, gameLost, gameWon, newGame } = gameStateSlice.actions;

export default gameStateSlice.reducer;
