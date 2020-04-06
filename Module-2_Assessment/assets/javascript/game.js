const gods = ['hermes' , 'apollo', 'zeus', 'hera' , 'hades'];
const maxGuesses = 10;
let currentWord = [];
let wins = 0;
let remainingGuesses = 0;
let placeholders = [];
let guessedLetters = [];
let blanks = document.querySelector('#blanks');
let lettersGuessed = document.querySelector('#lettersGuessed');
let guesses = document.querySelector('#guesses');
let winsNumber = document.querySelector('#winsNumber');


let startGame = function (){
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
        placeholders.push ('_');
        blanks.innerHTML = placeholders.join(' ');
    }
};

//Main game stuff
startGame();

//Listen for key press
document.addEventListener("keyup", function(event) {
    //Check if the game is over and reset if it is
        key = event.key
        guessing(key);
});

function guessing () {
    if (remainingGuesses > 1 && placeholders.indexOf('_') != -1) {
        if (guessedLetters.indexOf(key) == -1) {
        guessedLetters.push(key);
        lettersGuessed.innerHTML = guessedLetters.join(' ');
        //remove 1 guess
        remainingGuesses--;
        }
        guesses.innerHTML = remainingGuesses;    
            for (let k = 0 ; k < currentWord.length; k++) {
                if (currentWord [k] === key) {
                placeholders [k] = key;
                console.log (placeholders);
                blanks.innerHTML = placeholders.join(' ');
                console.log(placeholders);
            } 

    }
    } else if (placeholders.indexOf('_') == -1){
            youWin();
    } else {
        startGame();
    }
};

function youWin() {
    wins++;
    winsNumber.innerHTML = wins;
    startGame();
};
