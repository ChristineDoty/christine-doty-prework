// Make List of words
    const gods = ['hermes' , 'apollo' , 'ares', 'aphrodite', 'zeus', 'hera', 'demeter', 'poseidon' , 'hades' , 'dionysus', 'persephone', 'hestia'];
    let currentWord = [];
    const guessedLetters = [];
    const placeholders = [];

    //    for (let i = 0; i < gods.length; i++) {
            // Choose a random word
            currentWord = gods[Math.floor(Math.random() * gods.length)];
            console.log (currentWord);

            // Change number of underscores to match length of word
            let blanks = document.querySelector('#blanks');
        
            for (let i = 0; i < currentWord.length; i++) {
                placeholders.push ('_ ');
                blanks.innerHTML += placeholders[i];
                console.log (placeholders);
            };

// Listen for key press

// Subtract 1 from remaining guess amount

// Add letter to letters guessed

// Compare key press to letters in word

// If letter is in the word, reveal it

// If not, play buzzer

// If user guesses word before tries run out, add 1 to score, If not, display "You lose"

// User presses key to start


   // Move to next word and start again

