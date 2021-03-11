
var invisibleScore = 0;
var invisibleScoreTotal = 100; // I am the most amount of points you can get in the quiz :) 

var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 180; 

var beginTheQuizButton = document.querySelector('.StartSubmitButton'); // I am important for starting the quiz :)
beginTheQuizButton.addEventListener('click', IamTheQuiz);

var questionArryIndex = 0;

// a majority of my code can be seen operating in the console. 
    // Code still unfinished. Will work on with tutor. 

var quizQuestionsArray = [
    {
        title: "Commonly used data types DO NOT Include:", 
        choices: ["A.Strings","B.Booleans", "C.Alerts", "D.Numbers"],  
        answer: "C.Alerts"
    },

    {
        title: "Arrays in Javascript ", 
        choices: ["A.Strings","B.Booleans", "C.Alerts", "D.Numbers"],  
        answer: "C.Alerts"
    },

]



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
    
    loopQuestions();

    var firstTestButton = document.querySelector(".RightClass"); // this button is a place holder for the wide query selector that will cover an entire div. 
    var firstTestButtonAttribute = firstTestButton.getAttribute("class"); // checks to see if the right or wrong answer was selected
    firstTestButton.addEventListener('click', ScoreTrackingFunction); 

    function ScoreTrackingFunction() {
        if (firstTestButtonAttribute = "RightClass") {
            console.log("The right answer was selected: " + firstTestButtonAttribute);
            console.log("The current score: " + invisibleScore);
            invisibleScore += 20; 
            console.log("The current score: " + invisibleScore);
        
        } else if (firstTestButtonAttribute = "WrongClass") {
            console.log("The wrong answer has been selected");
            countDownTimerID -= 10; // The quiz taker is penealized for choosing the wrong answer.  

        } else {
            // The submit button has been pressed 
            if (firstTestButtonAttribute = ".SubmitButton") {
                console.log("The submit button has been pressed");
            }

        }
        
        
    } // Actions dependant on which button class is selected | RightClass, WrongClass, or SubmitButton


    // if the timer reaches 0 or the final submit is pressed, then initiate this function
    FinalResultsFunction();
    function FinalResultsFunction() {
        //code to connect the percent score and letter Grade in HTML
        
        console.log("The invisible Score is: " + invisibleScore);
        console.log("The invisible Score Total is: " + invisibleScoreTotal);
        
        // Your score 
        var visiblePercentage = (invisibleScore/invisibleScoreTotal) * 100;  
        console.log("The visible percentage is: " + visiblePercentage);
        
        var visibleLetterGrade;
        if (visiblePercentage >= 90){
            visibleLetterGrade = "A";
        }
        else if (visiblePercentage >= 80) {
            visibleLetterGrade = "B";
        }
        else if (visiblePercentage >= 70) {
            visibleLetterGrade = "C";
        }
        else if (visiblePercentage >= 60) {
            visibleLetterGrade = "D";
        } else {
            visibleLetterGrade = "F";
        }
        console.log("Here is your grade: " + visibleLetterGrade);

        // Enter your initials Sections 

        // Code that connects the javascript to the input code in the HTML

    }








}

function loopQuestions() {
    var currentQuestion = quizQuestionsArray[questionArryIndex]; // References the object within the array
    var questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestion.title; // making questionElement manip. the DOM and setting that change/edit equal to the current object title (currentQuestion.title)

    currentQuestion.choices.forEach(function(choices, index){
        var choiceButton = document.createElement("button"); 
        choiceButton.setAttribute("class", choiceBtns); //references html and creates button 
        choiceButton.setAttribute("value", choices);
        choiceButton.textContent = index + 1 + choices;
        

    })
}
   



