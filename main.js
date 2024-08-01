const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "bomb";
      break;
      return randomNumber;
  }
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Computer Won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Computer Won!";
    } else {
      return "You Won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer Won!";
    } else {
      return "You Won!";
    }
  }
  if (userChoice === "bomb") {
    if (computerChoice === "scissors" && computerChoice === "rock" && computerChoice === "paper") {
      return "The Computer Won!";
    } else {
      return "You Won";
    }
  }
};

console.log(determineWinner("bomb", "scissors"));
