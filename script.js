
// Project still not finished. Working to complete this (as of 11-Mar-2021)         <-------------



// Variables and question array                                         Essential Definitions 


var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 180; 

var choicesE1 = document.getElementById("questionChoices"); // references #choices within the questionDiv. I am important for displaying the questions on screen :)
var questionsDivE1 = document.getElementById("questionDiv");
 
var openingE1 = document.getElementById("opening"); // The first div car the quiz taker sees. 
var beginTheQuizButtonE1 = document.getElementById("StartSubmitButton"); // I am important for starting the quiz. I am within the opening id :)

var highScoreDivE1 = document.getElementById("highScoreDiv");
var initialsIDE1 = document.getElementById("initialsID");
var previousScoreIDE1 = document.getElementById("previousScoreID");


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
        answer: "B.Curly Braces"
    },

    {
        title: "A very useful tool used during development and debugging for printing content debugger is: ", 
        choices: ["A.JavaScript","B.Terminal/Bash", "C.For Loops", "D.Console Log"],  
        answer: "D.Console Log"
    }

] // This array contains the question objects. I am important for showing questions on screen :) 5 Elements in total. Index of 4 is the max 


var invisibleScore = 0; // I am the most amount of points you can get in the quiz :)
var invisibleScoreTotal = 100;  
var questionArryIndex = 0;

beginTheQuizButtonE1.addEventListener('click', IamTheQuiz);



// Below is where things start happening                                            Below are the essential functions



function IamTheQuiz() // The main loop. This is where the magic happens. 
{
    console.log("The submit button was clicked. IamTheQuiz started");

    var countMeIn = 0; 
    if (countMeIn === 0) {
        countDownFunction(); // I am the timer :D 
        countMeIn += 1;
    } // The timer function will onlu be called once during the quiz. Without this, the timer function keeps getting called and accelerates the timer per click. 
    

    openingE1.setAttribute("class", "disappear");
    questionsDivE1.removeAttribute("class"); // this will display the question prompts only 
 
    loopQuestions();

    console.log("question array index IamTheQuiz " + questionArryIndex);
}


function countDownFunction() {
    setInterval(function(){ // iterates once every 1000 ms (or 1s) 
        countDownVariable.innerHTML = countDownTimerID ; // innerHTML specifies rge HTML content of a variable. This links the variable to the HTML
        countDownTimerID -= 1; 
        if (countDownTimerID <= 0) {
            alert("Hey! Time is up. Show the results screen");
            countDownTimerID = 180;
        }
    }, 1000)

}


function loopQuestions() {   
    
    var currentQuestion = quizQuestionsArray[questionArryIndex]; // References the object (element) within the array
    var questionElement = document.getElementById("question"); // References the H3 within the questionDiv ID
    questionElement.textContent = currentQuestion.title; // This makes questionElement manipulate the DOM and setting that change/edit equal to the current object title (currentQuestion.title)
    choicesE1.innerHTML = " "; // Creates the empty space which will produce the buttons. This edits within the questionDiv of the HTML


    currentQuestion.choices.forEach(function(choices) { 
        
        var choiceButton = document.createElement("button"); // This variable containes the button for submitting the questions. but this line does not generate anything by itself. This references the titlecard div 
        choiceButton.setAttribute("class", "questionChoices"); // references html and updates 
        choiceButton.setAttribute("value", choices); // 
        choiceButton.textContent = choices;     // I create the button text that appears on screan. I am used alongside with buttonSelector within checkTheSelection()
        choiceButton.addEventListener("click", checkTheSelection); // I trigger the checking function 
        choicesE1.appendChild(choiceButton); // this adds the 4 options as the buttons. 
        
        
        console.log("and this is to go for the choiceButton _-_" + choiceButton);
    } )


    function checkTheSelection(event) {
        
        
        var buttonSelector = event.target.textContent; // I display the text of the button (target) that was selected after an event (the click)


        if (buttonSelector === currentQuestion.answer) {
            invisibleScore += 20;
            console.log("Right answer. This is the buttonSelector event.target " + buttonSelector + "the score is: " + invisibleScore);
        } else { 
            
            console.log("Wrong answer. This is the buttonSelector event.target ___ " + buttonSelector + "the score is: " + invisibleScore);
        }

    
// for tracking the answer and what has been clicked
        console.log("button selector " + buttonSelector);
        console.log("current question answer " + currentQuestion.answer);

        questionArryIndex += 1; 
        console.log("question array index checkTheSelection " + questionArryIndex);

        IamTheQuiz(); // Starts the next series of questions :) 
    }


}
   

