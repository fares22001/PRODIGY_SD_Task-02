// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById("userGuess").value;
  const resultElement = document.getElementById("result");
  const attemptsElement = document.getElementById("attempts");

  if (userGuess.trim() === "" || isNaN(userGuess)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const guess = parseInt(userGuess);

  attempts++;

  if (guess === secretNumber) {
    resultElement.textContent = `Congratulations! You guessed the correct number: ${secretNumber}`;
    attemptsElement.textContent = `It took you ${attempts} attempts.`;
    document.getElementById("userGuess").disabled = true;
  } else if (guess < secretNumber) {
    resultElement.textContent = "Too low! Try again.";
  } else {
    resultElement.textContent = "Too high! Try again.";
  }
}
