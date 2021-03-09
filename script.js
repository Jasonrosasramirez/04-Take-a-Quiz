
var invisibleScore = 0;


var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 180; 

var beginTheQuizButton = document.querySelector('.StartSubmitButton'); // I am important for starting the quiz :)
beginTheQuizButton.addEventListener('click', IamTheQuiz);







function IamTheQuiz(){
    
    function CountDownFunction() {
        setInterval(function(){ // iterates once every 1000 ms (or 1s) 
            countDownVariable.innerHTML = countDownTimerID ; // innerHTML specifies rge HTML content of a variable. This links the variable to the HTML
            countDownTimerID -= 1; 
            if (countDownTimerID <= 0) {
                alert("Hey! Time is up. Show the results screen");
                countDownTimerID = 180;
            }
        }, 1000)
        console.log("The submit button was clicked");
    } // Reduces the timer once per second

    CountDownFunction();
    
    var firstTestButton = document.querySelector("#rightAnswerOne"); // document.getElementById("1Cright").getAttribute("class");
    firstTestButton.addEventListener('click', addthescore);

    function addthescore() {
        console.log("this is the class type of: " + typeof(firstTestButton) + " " + firstTestButton);
        
    }



}




function YourGradeFunction (){
    var scoreTotal = 100; 
    var scoreObtained; // will need some query selection 
    var scorePercentage = scoreObtained / scoreTotal; 
    var scoreLetterGrade = ""; //This will probably be an if statement 

    console.log("Score total is " + scoreTotal + "score obtained " +  scoreObtained + "score Percentage" + scorePercentage + " Score Letter Grade: " + scoreLetterGrade);

} // Executed at the end of the quiz

