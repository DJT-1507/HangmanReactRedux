# About this app
This app was created with React using Redux for global state management. It was created as part of my studies, learning Full Stack Website Development with HyperionDev. Over time, as my knowledge increases I plan to make updates to this.

This game was developed with a very simple UI making use of the Bootstrap framework - meaning it is also responsive. 

There are 50 random words in the array in ```src/components/Words.jsx``` - feel free to add more but make sure you update line 28 of ```src/components/StartNewGame.jsx``` to reflect the new number of words you now have!

The UI will automatically change if the word is guessed correctly/you have run out of guesses.

## How to install
Open your command line and navigate to where you would like the files located. Once there enter the following into the command line:

1. ```git clone https://github.com/DJT-1507/HangmanReactRedux.git```
2. ```cd HangmanReactRedux```
3. ```npm i```
4. ```npm start```

Once you have completed all of these steps, the web app should open automatically in your web browser and you will be able to play the game!

### The game
The aim of the game is to correctly guess all of the letters of a randomly chosen word, before you run out of chances and the Hangman is fully drawn!