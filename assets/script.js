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

    
}