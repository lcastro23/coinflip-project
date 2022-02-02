var userChoice = prompt("Heads or Tails");
var randomNumber = Math.round(Math.random()) + 1;
if (randomNumber == 1) {
    var computerChoice = "heads";
} else {
    var computerChoice = "tails";
}
if (computerChoice == userChoice) {
    if (computerChoice == "heads") {
        alert("You guessed right! The coin flip landed on heads!");
    } else {
        alert("You guessed right! The coin flip landed on tails!");
    }
} else {
    if (computerChoice == "heads") {
        alert("Sorry, the coin flip landed on heads not tails.");
    } else {
        alert("Sorry, the coin flip landed on tails not heads.");
    }
}

var birthYear = prompt("Please enter your birth year:");
var currentYear = new Date ().getFullYear();
var userAge = currentYear - birthYear;
if(userAge > 21)
{
    alert("You are old enough to drink in the US!");
}
else if(userAge ==21)
{
    alert("You are old enough to drink in the US...barely");
}
else
{
    alert("Sorry, you are not old enough to drink in the US");
}






