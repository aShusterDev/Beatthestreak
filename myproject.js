var highestStreak = 0;

function startGame() {
    var maxNumber = parseInt(prompt("Enter the maximum number (X) for the range:"));
    playGame(maxNumber);
}

function playGame(maxNumber) {
    var number = generateRandomNumber(maxNumber);
    var guessedRight = false;

    for (var attempts = maxNumber; attempts > 0; attempts--) {
        var guess = parseInt(prompt("Enter Your Guess:"));

        if (guess === number) {
            guessedRight = true;
            alert("Your answer was right! Keep going.");
        } else {
            alert("You are wrong. Game over!");
            break;
        }
    }

    if (guessedRight) {
        updateHighScore();
        playGame(maxNumber);
    }
}

function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function updateHighScore() {
    if (highestStreak < Infinity) {
        highestStreak++;
    }
    alert("Your highest streak: " + highestStreak);
}
