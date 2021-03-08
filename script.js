var quizTimeRemaining = 180; //The total time for the quiz left in seconds.
var quizTimeDeducation = 10; // This is the amount of time lost per wrong answer in seconds. 



// var buttonName = document.querySelector(".Submit")
// buttonName.addEventListener("click", logmee()); //function 




function logmee() {
    console.log("The submit button was clicked");

}

function YourGrade(){
    var scoreTotal = 100; 
    var scoreObtained; // will need some query selection 
    var scorePercentage = scoreObtained / scoreTotal; 
    var scoreLetterGrade = ""; //This will probably be an if statement 

    console.log("Score total is " + scoreTotal + "score obtained " +  scoreObtained + "score Percentage" + scorePercentage + " Score Letter Grade: " + scoreLetterGrade);

} // Executed at the end of the quiz

