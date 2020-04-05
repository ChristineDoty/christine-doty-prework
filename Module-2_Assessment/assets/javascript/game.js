// Make List of words
const gods = ['hermes' , 'apollo', 'zeus', 'hera' , 'hades'];
let currentWord = [];
const guessedLetters = [];
const placeholders = [];
let wins = 0;
let remainingGuesses = 10;
let gameOver = false;
let blanks = document.querySelector('#blanks');
let lettersGuessed = document.querySelector('#lettersGuessed');
let guesses = document.querySelector('#guesses');
let winsNumber = document.querySelector('#winsNumber');
 
//Press any key to start

// Choose a random word
currentWord = gods[Math.floor(Math.random() * gods.length)];
console.log (currentWord);

 // Change number of underscores to match length of word    
    for (let i = 0; i < currentWord.length; i++) {
            placeholders[i] = "_"
            blanks.innerHTML = placeholders.join(' ');
    }


// Listen for key press
    document.addEventListener("keyup", function(event) {
        const key = event.key;
        if (!gameOver) {
        // Add letter to letters guessed
        guessedLetters.push(key);
        lettersGuessed.innerHTML = guessedLetters.join(' '); 
        //Remove 1 guess
        remainingGuesses--;
        guesses.innerHTML = remainingGuesses;
        }


    // Compare key press to letters in word
    // If letter is in the word, reveal it
    
        for (let k = 0 ; k < currentWord.length; k++) {
            if (currentWord [k] === key) {
            placeholders [k] = key;
            console.log (placeholders);
            blanks.innerHTML = placeholders.join(' ');
            }
        }
    //check if user guessed the word

    });
// If user guesses word before tries run out, add 1 to score, If not, display "You lose"


   // Move to next word and start
