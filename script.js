
// Project still not finished. Working to complete this (as of 11-Mar-2021)         <-------------



// Variables and question array                                         Essential Definitions 


var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 180; 

var choicesE1 = document.getElementById("choices"); // references #choices within the questionDiv. I am important for displaying the questions on screen :)
var questionsDivE1 = document.getElementById("questionDiv");
 
var openingE1 = document.getElementById("opening"); // The first div car the quiz taker sees. 
var beginTheQuizButtonE1 = document.getElementById("StartSubmitButton"); // I am important for starting the quiz. I am within the opening id :)


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
] // This array contains the question objects. I am important for showing questions on screen :)


var invisibleScore = 0; // I am the most amount of points you can get in the quiz :)
var invisibleScoreTotal = 100;  
var questionArryIndex = 0;

beginTheQuizButtonE1.addEventListener('click', IamTheQuiz);



// Below is where things start happening                                            Below are the essential functions



function IamTheQuiz() // The main loop. This is where the magic happens. 
{
    console.log("The submit button was clicked. IamTheQuiz started");
    countDownFunction();

    openingE1.setAttribute("class", "disappear");
    questionsDivE1.removeAttribute("class");
 
    loopQuestions();
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
    console.log("The submit button was clicked. countDownFunction started");
}


function loopQuestions() {   
    
    var currentQuestion = quizQuestionsArray[questionArryIndex]; // References the object (element) within the array
    var questionElement = document.getElementById("question"); // References the H3 within the questionDiv ID
    questionElement.textContent = currentQuestion.title; // This makes questionElement manipulate the DOM and setting that change/edit equal to the current object title (currentQuestion.title)
    choicesE1.innerHTML = " "; // Creates the empty space which will produce the buttons. This edits within the questionDiv of the HTML

    currentQuestion.choices.forEach(function(choices, index) { 
        
        var choiceButton = document.createElement("button"); // This variable containes the button for submitting the questions. but this line does not generate anything by itself. This references the titlecard div 
        choiceButton.setAttribute("class", "choiceBtns"); // references html and updates 
        choiceButton.setAttribute("value", choices); // 
        choiceButton.textContent = index + 1 + choices;
        choiceButton.addEventListener("click", checkTheSelection); 
        choicesE1.appendChild(choiceButton); // this adds the 4 options as the buttons. 
        console.log("Hello! I am done. append child has been done");

        console.log("and this is to go for the choiceButton _-_" + choiceButton);
    } )

    function checkTheSelection(event) {
        var buttonSelector = event.target;

        console.log("This is the currentQuestion.title value: " + currentQuestion.title); // This works. Question presented 
        console.log("This is the currentQuestion.answer value: " + currentQuestion.answer); // This works. Answer presented
        console.log("I am daa the button selector value, mate: " + buttonSelector); // this comes back as [object HTMLButtonElement]
        
        

        if (buttonSelector.textContent === currentQuestion.answer) {
            console.log("Right answer. This is the buttonSelector event.target" + buttonSelector);
            invisibleScore++;
            questionArryIndex++;
            console.log("the right answer was selected. Score is: " + invisibleScore);
        } else { 
            console.log("Wrong answer. This is the buttonSelector event.target ___" + buttonSelector);
            console.log("The wrong answer was selcted: Score is: ___ " + invisibleScore);
        }
    }


}
   

