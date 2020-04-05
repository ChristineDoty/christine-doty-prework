const gods = ['hermes' , 'apollo', 'zeus', 'hera' , 'hades'];
const maxGuesses = 10;
let currentWord = [];
let wins = 0;
let remainingGuesses = 0;
gameOver = false;
let placeholders = [];
let guessedLetters = [];
let blanks = document.querySelector('#blanks');
let lettersGuessed = document.querySelector('#lettersGuessed');
let guesses = document.querySelector('#guesses');
let winsNumber = document.querySelector('#winsNumber');



function gameSetup() {
    //Choose a random word
    currentWord = gods[Math.floor(Math.random() * gods.length)];
    console.log (currentWord);

    //Clear arrays and text and reset guesses
    placeholders = [];
    guessedLetters = [];
    blanks.innerHTML = ' ';
    guesses.innerHTML = '10';
    lettersGuessed.innerHTML = ' ';
    remainingGuesses = maxGuesses;

     // Change number of underscores to match length of word    
     for (let i = 0; i < currentWord.length; i++) {
        placeholders[i] = '_'
        blanks.innerHTML = placeholders.join(' ');
    }
}

//Main game stuff

//Listen for key press
document.addEventListener("keypress", function(event) {
    //Check if the game is over and reset if it is
    if(gameOver) {
        gameSetup();
        gameOver = false;
    } else {
    // Add letter to letters guessed
    // guessedLetters.push(key);
    // lettersGuessed.innerHTML = guessedLetters.join(' '); 
    // //Remove 1 guess
    // remainingGuesses--;
    // guesses.innerHTML = remainingGuesses;
    guessing (event.key);
    }
});

function guessing () {
    if (remainingGuesses > 0) {
        guessedLetters.push(event.key);
        lettersGuessed.innerHTML = guessedLetters.join(' '); 
        //Remove 1 guess
        remainingGuesses--;
        guesses.innerHTML = remainingGuesses;    
            for (let k = 0 ; k < currentWord.length; k++) {
                if (currentWord [k] === event.key) {
                placeholders [k] = event.key;
                console.log (placeholders);
                blanks.innerHTML = placeholders.join(' ');
                } 
            }
    }
}

//Check if user has guessed word
checkWin (); 

//If user guessed word, add 1 to wins, set GameOver
function checkWin() {
    if(placeholders.indexOf('_') === -1) {
        wins++;
        console.log (wins);
        winsNumber.innerHTML = wins;
        //Restart Game
        gameOver = true;
    //If number of guesses is used up and word is still not solved, restart game
    }
}

