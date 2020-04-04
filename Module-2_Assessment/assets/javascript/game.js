// Make List of words
const gods = ['hermes' , 'apollo', 'zeus', 'hera' , 'hades'];
let currentWord = [];
const guessedLetters = [];
const placeholders = [];
let wins = 0;
let remainingGuesses = 10;
let blanks = document.querySelector('#blanks');
let lettersGuessed = document.querySelector('#lettersGuessed');
let guesses = document.querySelector('#guesses');
 

// Choose a random word
currentWord = gods[Math.floor(Math.random() * gods.length)];
console.log (currentWord);

 // Change number of underscores to match length of word    
    for (let i = 0; i < currentWord.length; i++) {
            placeholders[i] = "_"
            blanks.textContent = placeholders;
    }


// Listen for key press
    document.addEventListener("keyup", function(event) {
        const key = event.key;
    //Remove 1 guess
        remainingGuesses--;
        guesses.innerHTML = remainingGuesses;

    // Compare key press to letters in word
    // If letter is in the word, reveal it

        for (let i = 0 ; i < currentWord.length; i++) {
            if (currentWord [i] === key) {
                placeholders [i] = key;
                console.log (placeholders);
                blanks.innerHTML = placeholders.join(" ");
                // Add letter to letters guessed
                guessedLetters [i] = key;
                lettersGuessed.innerHTML = guessedLetters.join(" "); 
            } 
        }
    });


// If user guesses word before tries run out, add 1 to score, If not, display "You lose"


   // Move to next word and start
