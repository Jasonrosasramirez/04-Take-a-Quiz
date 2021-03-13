

// Variables and question array                                         Essential Definitions 


var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 60; 
var countMeIn = 0; 
var countDownWrongAnswerPenalty = 10;

var choicesE1 = document.getElementById("questionChoices"); // references #choices within the questionDiv. I am important for displaying the questions on screen :)
var questionsDivE1 = document.getElementById("questionDiv");
 
var openingE1 = document.getElementById("opening"); // The first div car the quiz taker sees. 
var beginTheQuizButtonE1 = document.getElementById("StartSubmitButton"); // I am important for starting the quiz. I am within the opening id :)

var highScoreDivE1 = document.getElementById("highScoreDiv");
var scoreOfQuizIDE1 = document.getElementById("scoreOfQuizID");

var invisibleScore = 0; // I am the most amount of points you can get in the quiz :)
var invisibleScoreTotal = 100;  
var scoreOfQuizIDE1 = document.getElementById("scoreOfQuizID"); // display of quiz score


var quizQuestionsArray = [
    {
        title: "Commonly used data types DO NOT Include:", 
        choices: ["A.Strings","B.Booleans", "C.Alerts", "D.Numbers"],  
        answer: "C.Alerts"
    },

    {
        title: "Arrays in Javascript can be used to store ______", 
        choices: ["A.Numbers and Strings","B.Other Arrays", "C.Booleans", "D.All of the Above"],  
        answer: "D.All of the Above"
    },

    {
        title: "The condition in an if/else statement is enclosed with ______", 
        choices: ["A.Quotes","B.Curly Braces", "C.Parentheses", "D.Square Brackets"],  
        answer: "C.Parentheses"
    },

    {
        title: "A very useful tool used during development and debugging for printing content debugger is: ", 
        choices: ["A.JavaScript","B.Terminal/Bash", "C.For Loops", "D.Console Log"],  
        answer: "D.Console Log"
    }

] // This array contains the question objects. I am important for showing questions on screen :) 5 Elements in total. Index of 4 is the max 

var questionArryIndex = 0;


// Below is where things start happening                                            Below are the essential functions


beginTheQuizButtonE1.addEventListener('click', IamTheQuiz); // Click on me to begin the magic :D 

function IamTheQuiz() // The main loop. This is where the magic happens. 
{
    console.log("The submit button was clicked. IamTheQuiz started");

    if (countMeIn === 0) {
        countMeIn += 1;
        countDownFunction(); // I am the timer :D 
    } // The timer function will onlu be called once during the quiz. Without this, the timer function keeps getting called and accelerates the timer per click. 

// Begin the quiestions phase 
    openingE1.setAttribute("class", "disappear"); // this hides the opening title card
    questionsDivE1.removeAttribute("class"); // this will display the question prompts only 


    if (questionArryIndex < 4) // only loop the questions so long as the index is below 4. Index 0 - 3.
    {
        loopQuestions();
    } else {
        resultsPageFunction();
    }

}




function countDownFunction() {
    setInterval(function(){ // iterates once every 1000 ms (or 1s) 
        countDownVariable.innerHTML = countDownTimerID ; // innerHTML specifies rge HTML content of a variable. This links the variable to the HTML
        

// work on this here to stop counting when the array is done

        if (countDownTimerID <= 0 || questionArryIndex >= 4) {
            resultsPageFunction(); // When time is up, the results page will be loaded up. 
        } else{
            countDownTimerID -= 1;
        }

    }, 1000)
}




function loopQuestions() {   
// This function loops through the questions and populates the questions. 

    var currentQuestion = quizQuestionsArray[questionArryIndex]; // References the object (element) within the array
    var questionElement = document.getElementById("question"); // References the H3 within the questionDiv ID
    questionElement.textContent = currentQuestion.title; // This makes questionElement manipulate the DOM and setting that change/edit equal to the current object title (currentQuestion.title)
    choicesE1.innerHTML = " "; // Creates the empty space which will produce the buttons. This edits within the questionDiv of the HTML


    currentQuestion.choices.forEach(function(choices) { 
        
        var choiceButton = document.createElement("button"); // This variable containes the button for submitting the questions. but this line does not generate anything by itself. This references the titlecard div 
        choiceButton.setAttribute("class", "questionChoices"); // references html and updates 
        choiceButton.setAttribute("value", choices);  
        choiceButton.textContent = choices; // I create the button text that appears on screan. I am used alongside with buttonSelector within checkTheSelection()
        choiceButton.addEventListener("click", checkTheSelection); // I trigger the checking function 
        choicesE1.appendChild(choiceButton); // this adds the 4 options as the buttons.

    } )

    function checkTheSelection(event) {
        // This function is what checks the button choice and adds up the score.  
        
        var buttonSelector = event.target.textContent; // I display the text of the button (target) that was selected after an event (the click)

        if (buttonSelector === currentQuestion.answer) {
            //This checks to see if the button selected is the same as the currentQuestion.answer which is getting back the key of the array.  
            invisibleScore += 25;
        } else { 
            countDownTimerID -= countDownWrongAnswerPenalty;
        }
    
    // for tracking the answer and what has been clicked
        questionArryIndex += 1; 
        console.log("question array index checkTheSelection " + questionArryIndex);
        IamTheQuiz(); // Starts the next series of questions :) 
    }
}
   




function resultsPageFunction() {
    questionsDivE1.setAttribute("class", "disappear"); // Makes the question section disapear once all of the questions are through. 
    highScoreDivE1.removeAttribute("class");
    console.log("resultsPageFunction has been activated. index at " + questionArryIndex);
    console.log("Invisible score " + invisibleScore);
    scoreOfQuizIDE1.innerHTML = invisibleScore;



}