console.log("Hello World");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};
function playRound(playerSelection, computerSelection) {
  let string = "";
  let result = ["Tie Game!", "You Win!", "You Lose!"];
  let sentence = [
    " Paper beats Rock",
    " Rock beats Scissors",
    " Scissors beats Paper",
  ];
  let casePlayerSelection = playerSelection.toLowerCase();
  if (casePlayerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        string = result[0];
        break;
      case "paper":
        string = result[2] + sentence[0];
        break;
      case "scissors":
        string = result[1] + sentence[1];
        break;
    }
  } else if (casePlayerSelection == "paper") {
    switch (computerSelection) {
      case "paper":
        string = result[0];
        break;
      case "rock":
        string = result[1] + sentence[0];
        break;
      case "scissors":
        string = result[2] + sentence[2];
        break;
    }
  } else if (casePlayerSelection == "scissors") {
    switch (computerSelection) {
      case "scissors":
        string = result[0];
        break;
      case "paper":
        string = result[1] + sentence[2];
        break;
      case "rock":
        string = result[2] + sentence[1];
        break;
    }
  } else {
    string = "Please choose valid option.";
  }
  return string;
}

const chooseWeapon = () => {
  const answer = prompt("What do you choose?");
  return answer;
};
const play = () => {
  const playerSelection = chooseWeapon();
  const computerSelection = getComputerChoice();
  alert(playRound(playerSelection, computerSelection));
};
