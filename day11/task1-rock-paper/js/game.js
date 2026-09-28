var PlayerOneChoice = "scissors";
var PlayerTwoChoice = "Paper";

if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It is a tie");
} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
    console.log("Paper wins");
} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") {
    console.log("Rock wins");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
    console.log("Paper wins");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "scissors") {
    console.log("scissors wins");
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Rock") {
    console.log("Rock wins");
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper") {
    console.log("scissors wins");
}