var PlayerOneChoice = "scissors";
var PlayerTwoChoice = "Paper";
var p1 = PlayerOneChoice.toLowerCase();
var p2 = PlayerTwoChoice.toLowerCase();

if (p1 === p2) {
    console.log("It is a tie");
} else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
) {
    console.log(`${PlayerOneChoice} wins - Player One wins`);
} else {
    console.log(`${PlayerTwoChoice} wins - Player Two wins`);
}