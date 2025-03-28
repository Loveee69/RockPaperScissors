// console.log("Hello world");
// Input to choose rock, paper, or scissors
// If tie, another round
// Determine winner if r > s, s > p, p > r
// print is winner

// keep track of score with global variable
let humanScore = 0;

let computerScore = 0;

// get computers choice for game
function getComputerChoice() {
  let x = Math.random()

  if (x < 0.33) {
        return "rock";
  } else if (x < 0.66) {
        return "paper";
  } else {
        return "scissors";
  }
}

// get users choice for game
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors: ");
}


// declares who the winner is
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        return console.log("you tie");
    } else if (
        (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
        (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") ||
        (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    ) {
        console.log("you win");
        return console.log("Your score is " + ++humanScore);
    } else if (
        (computerChoice == "rock" && humanChoice.toLowerCase() == "scissors") ||
        (computerChoice == "paper" && humanChoice.toLowerCase() == "rock") ||
        (computerChoice == "scissors" && humanChoice.toLowerCase() == "paper")
    ) {
        console.log("you lose");
        return console.log("The computers score is " + ++computerScore);
    }
    }

// runs game to see who wins round by round
function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win! Congratulations");
    } else if ( computerScore > humanScore) {
        console.log("You lose LOSER!");
    } else {
        console.log("Tie! No winner");
    }
}

playGame();