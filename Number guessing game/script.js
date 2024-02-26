let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Enter a valid number (between 1 and 100)!');
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = attempts;

    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else if (guess < randomNumber) {
        setMessage('Try a higher number.');
    } else {
        setMessage('Try a lower number.');
    }
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    setMessage('');
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}



