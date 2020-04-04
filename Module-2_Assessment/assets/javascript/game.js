// Make List of words
    const gods = ['hermes' , 'apollo', 'zeus', 'hera' , 'hades'];
    let currentWord = [];
    const guessedLetters = [];
    const placeholders = [];

   
// Choose a random word
currentWord = gods[Math.floor(Math.random() * gods.length)];
console.log (currentWord);
            
let remainingGuesses = 15
let guesses = document.querySelector('#guesses');

guesses.innerHTML = remainingGuesses;

 // Change number of underscores to match length of word
let blanks = document.querySelector('#blanks');
        
    for (let i = 0; i < currentWord.length; i++) {
            placeholders[i] = " _ "
            blanks.textContent = placeholders;
        }
        // User presses key to start


// Listen for key press
    const letter = function (event) {
    const key = event.key;
    // Compare key press to letters in word
    // If letter is in the word, reveal it
        for (let i = 0 ; i < currentWord.length; i++) {
            if (currentWord [i] === key) {
                placeholders [i] = key;
                console.log (placeholders);
                blanks.innerHTML = placeholders.join(" ");
            }
        }
    }    

document.addEventListener('keyup', letter);


// Add letter to letters guessed

// If user guesses word before tries run out, add 1 to score, If not, display "You lose"


   // Move to next word and start
