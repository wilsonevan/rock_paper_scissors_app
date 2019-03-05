
// Initialize Data for Possible Choices
var rockChoice = document.getElementById("btn-rock");
var paperChoice = document.getElementById("btn-paper");
var scissorsChoice = document.getElementById("btn-scissors");

// Initialize user and computer choice vars & arrays
var userChoice = null;
var choiceArray = ["rock","paper","scissors"];
var computerChoice = null;

// Initialize vars for tracking user performance
var wins = 0;
var ties = 0;
var losses = 0;
var totalSessionGames = 0;
var winPercentage = 0;

// Listens for individual button presses
rockChoice.addEventListener("click", calculateWinner );
paperChoice.addEventListener("click", calculateWinner );
scissorsChoice.addEventListener("click", calculateWinner );
  

// Takes the input data and calculates the winner randomly
function calculateWinner(){
  
  userChoice = this.id.slice(4); // Cuts off button from id to compare against computer
  computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
  var result = null;
  
  // User Wins
  if ( (userChoice == "paper" && computerChoice =="rock") ||
  (userChoice == "scissors" && computerChoice =="paper") ||
  (userChoice == "rock" && computerChoice =="scissors") ){
    result = "win";
  }
  // User Ties
  else if ( userChoice === computerChoice ){
    result = "tie";
  }
  // User Loses
  else {
    result = "loss";
  }

  // Logs the result in the active performance report
  trackPerformance(result)

  // Based on above results, call on function to display proper outputs
  displayOutput(result, userChoice, computerChoice);
}


// Keep track of User's Performance
function trackPerformance(result) {
  newResult = result
  if ( result === "win" )
    wins++;
  else if ( result === "tie" )
    ties++;
  else if ( result === "loss" )
    losses++;

  totalSessionGames = wins + ties + losses;
  winPercentage = (wins/totalSessionGames * 100).toFixed(2);
  debugger
}


// This function updates the html file with the game's result
function displayOutput(result, userChoice, computerChoice){

  // Loads image for corresponding user icon
  if (userChoice == "rock")
    document.getElementById("userIcon").className = document.getElementById("btn-rock-icon").className;
  else if (userChoice == "paper")
    document.getElementById("userIcon").className = document.getElementById("btn-paper-icon").className;
  else if (userChoice == "scissors")
    document.getElementById("userIcon").className = document.getElementById("btn-scissors-icon").className;

  // Loads image for corresponding computer icon in proper alignment to face the user's icon
  if (computerChoice == "rock")
    document.getElementById("computerIcon").className = "huge counterclockwise rotated hand rock icon";
  else if (computerChoice == "paper")
    document.getElementById("computerIcon").className = "huge counterclockwise rotated hand paper icon";
  else if (computerChoice == "scissors")
    document.getElementById("computerIcon").className = "huge hand scissors icon";

  // Display Final Result
  if (result == "win" ) {
    document.getElementById("result").innerHTML = "Winner Winner Chicken Dinner";
    document.getElementById("result").style.color = "green";
  }
  else if ( result == "tie" ) {
    document.getElementById("result").innerHTML = "Tie! Try Again.";
    document.getElementById("result").style.color = "grey";
  }
  else if ( result == "loss" ) {
    document.getElementById("result").innerHTML = "You Lost!";
    document.getElementById("result").style.color = "blue";
  }
  else {
    document.getElementById("result").innerHTML = "Error";
    document.getElementById("result").style.color = "red";
  }

  // Show the Data from the current user's session
  document.getElementById("performance").innerText = "Active Session Win Percentage: " + winPercentage + "%";

}