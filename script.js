/*Generate a random number between 0 and 1
If number is < 0.33 rock
else if number is < 0.66 paper
else scissors */

function getComputerChoice() {
	let num = Math.random();
	// console.log(num);

	if (num < 0.33) {
		return 'rock';
	} else if (num < 0.66) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// console.log(getComputerChoice);

// Part 2 logic for getting human choice
/* function getHumanChoice
prompt user 'type rock, paper, or scissors to play'
store choice
end function*/

function getHumanChoice() {
	let choice;

	while (true) {
		choice = prompt('To play type rock, paper, or scissors').toLowerCase();
		if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
			return choice;
		} else {
			alert('Invalid choice! Please enter rock, paper, or scissors.');
		}
	}
}
// console.log(getHumanChoice);
/*Part 3 declare player score variables */

// let humanScore = 0;
// let computerScore = 0;

/*Part 4 Write logic to play single round */

function playRound(humanChoice, computerChoice) {
	console.log(
		`playRound is running with Human: ${humanChoice}, computer: ${computerChoice}`
	);

	if (humanChoice === computerChoice) {
		return 'It is a draw';
	} else if (
		(humanChoice === 'scissors' && computerChoice === 'paper') ||
		(humanChoice === 'paper' && computerChoice === 'rock') ||
		(humanChoice === 'rock' && computerChoice === 'scissors')
	) {
		return 'You win!';
	} else {
		return 'You lose!';
	}
}

// const humanSelection = getHumanChoice();

// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

/*function playGame 
create variables:
let humanScore = 0;
let computerScore = 0;


Loop 5 rounds 
get comp and human choices
call playRound
if humanSelection is wins add point
if computerSelection wins add point

after 5 rounds
compare humanscore to computerscore
declare the winner or say its a tie.
*/
function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		let total = playRound(humanSelection, computerSelection);
		console.log(`Round ${i + 1}: ${total}`);

		if (total === 'You win!') {
			humanScore++;
		} else if (total === 'You lose!') {
			computerScore++;
		}
	}

    
	if (humanScore > computerScore) {
		alert(
			`you win the game the final score is you: ${humanScore} and computer: ${computerScore}`
		);
	} else if (computerScore > humanScore) {
		alert(
			`you lose the game the final score is you: ${humanScore} and computer: ${computerScore}`
		);
	} else {
		alert(
			`The game is a tie, the final score is you: ${humanScore} and computer: ${computerScore}`
		);
	}
}
playGame();
