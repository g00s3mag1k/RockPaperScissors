var wins=0;
var ties=0;
var losses=0;

var options = ['Rock', 'Paper', 'Scissor'];

var playGames = function() {
    var userChoice = window.prompt('Enter Rock, Paper, or Scissor:');

    if (!userChoice) {
        return;
    }

    userChoice=userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert('The computer chose ' + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++;
        window.alert("You lost!");
    }

    
}