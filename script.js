// Variables and question array                                         Essential Definitions 


var invisibleScore = 0; // I am the most amount of points you can get in the quiz :)
var invisibleScoreTotal = 100;  

var countDownVariable = document.querySelector('#countdownID'); // I am important for keeping track of time :) 
var countDownTimerID = 180; 

var openingE1 = document.getElementById("opening");

var beginTheQuizButtonE1 = document.querySelector('.StartSubmitButton'); // I am important for starting the quiz :)
beginTheQuizButtonE1.addEventListener('click', IamTheQuiz);


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

var questionArryIndex = 0;



// Below is where things start happening                                            Below are the essential functions


function IamTheQuiz(){
    
    countDownFunction();
    // loopQuestions();

    //openingE1.setAttribute("class", "disappear");
    var questionDivE1 = document.getElementById("questionDiv");
    questionDivE1.removeAttribute("class");
    
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
    console.log("The submit button was clicked");
}


function loopQuestions() {   
    
    var currentQuestion = quizQuestionsArray[questionArryIndex]; // References the object (element) within the array
    var questionElement = document.getElementById("question"); // References the H3 within the questionDiv ID
    questionElement.textContent = currentQuestion.title; // This makes questionElement manipulate the DOM and setting that change/edit equal to the current object title (currentQuestion.title)

    currentQuestion.choices.forEach(function(choices, index){ // forEach works like a for loop. The choices parameter isn't the same as the choices key within the object array. 
        
        var choiceButton = document.createElement("button"); // This variable containes the button for submitting the questions
        choiceButton.setAttribute("class", choiceBtns); // references html and creates button 
        choiceButton.setAttribute("value", choices); // 
        choiceButton.textContent = index + 1 + choices;


    })
}
   



