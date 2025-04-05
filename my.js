// console.log("Hello world");
// Input to choose rock, paper, or scissors
// If tie, another round
// Determine winner if r > s, s > p, p > r
// print is winner

// keep track of score with global variable
let humanScore = 0;

let computerScore = 0;

const rock = document.querySelector("#rock");

const paper = document.querySelector("#paper");

const scissors = document.querySelector("#scissors");

let lineBreak = document.createElement("br");

const div = document.createElement("div");
div.style.backgroundColor = "red";
div.style.border = "3px solid black";
document.body.appendChild(div);


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
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    playGame();
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    playGame();
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    playGame();
});



// declares who the winner is
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        const tieChoice = document.createElement("tiechoice");
        tieChoice.textContent = "Tie this round "; 
        div.appendChild(lineBreak);
        div.appendChild(tieChoice);
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) { const userScore = document.createElement("userscore");
        userScore.textContent = "Your score is " + ++humanScore;
        div.appendChild(lineBreak);
        div.appendChild(userScore);
    } else if (
        (computerChoice == "rock" && humanChoice== "scissors") ||
        (computerChoice == "paper" && humanChoice== "rock") ||
        (computerChoice == "scissors" && humanChoice== "paper")
    ) {
        const cpu = document.createElement("cpu");
        cpu.textContent = "Computer score is " + ++computerScore;
        div.appendChild(lineBreak);
        div.appendChild(cpu);
    }
    }

// runs game to see who wins round by round
function playGame() {   

    if (humanScore == 5) {
        const user = document.createElement("user");
        user.textContent = "You Won! Congratulations";
        div.appendChild(user);
    } else if ( computerScore == 5) {
        const computer = document.createElement("computer")
        computer.textContent = "YOU LOSE LOSER!!";
        div.appendChild(computer);
    } else if (humanScore == 5 && computerScore == 5) {
        const tie = document.createElement("tie");
        tie.textContent = "TIE GAME! NOBODY WINS"
        div.appendChild(tie);
    }
}

playGame();