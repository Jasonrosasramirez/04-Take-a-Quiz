
var invisibleScore = 0;


var countDownVariable = document.querySelector('#countdownID'); //
var beginTheQuizButton = document.querySelector('.StartSubmitButton');
var countDownTimerID = 180; 

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

    var firstTestButton = document.getElementById("1Cright").getAttribute("class");
    console.log(firstTestButton);
    if (firstTestButton = "RightClass") {
        console.log("This is the right class here! using = RightClass");    
        console.log(typeof(firstTestButton));
    } else {
        console.log("Was not selected");
    }

}




function YourGradeFunction (){
    var scoreTotal = 100; 
    var scoreObtained; // will need some query selection 
    var scorePercentage = scoreObtained / scoreTotal; 
    var scoreLetterGrade = ""; //This will probably be an if statement 

    console.log("Score total is " + scoreTotal + "score obtained " +  scoreObtained + "score Percentage" + scorePercentage + " Score Letter Grade: " + scoreLetterGrade);

} // Executed at the end of the quiz

