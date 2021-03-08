var quizTimeRemaining = 180; //The total time for the quiz left in seconds.
var quizTimeDeducation = 10; // This is the amount of time lost per wrong answer in seconds. 


// relates HTML elements to Javsascript Variables 
var countDownVariable = document.querySelector("#countdownID");
var beginTheQuizButton = document.querySelector(".StartSubmitButton");
countDownVariable = 10;


beginTheQuizButton.addEventListener("click", StartQuizFunction());


    

function StartQuizFunction() { 
    console.log("Hey! I have been clicked" + " \nI am the countdown: " + countDownVariable);
    
    setInterval(function(){
        countDownVariable -= 1;}, 1000) // decreases the quiz timer as the quiz goes on.
    


}





function YourGradeFunction (){
    var scoreTotal = 100; 
    var scoreObtained; // will need some query selection 
    var scorePercentage = scoreObtained / scoreTotal; 
    var scoreLetterGrade = ""; //This will probably be an if statement 

    console.log("Score total is " + scoreTotal + "score obtained " +  scoreObtained + "score Percentage" + scorePercentage + " Score Letter Grade: " + scoreLetterGrade);

} // Executed at the end of the quiz

