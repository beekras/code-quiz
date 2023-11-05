
 // 1) select HTML elements
var button = document.getElementById("start");
var timer = document.getElementById("time");

var askQuestions = document.getElementById("question-title");
var choices = document.querySelector(".choices");

var start = document.querySelectorAll(".start");

// WHEN I click the start button THEN a timer starts and I am presented with a question
var timeLeft = 75

function setTime() {

    var timerInterval = setInterval(function(){
      timeLeft--;
      timer.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
}
// setTime only when start quiz button is pressed
button.addEventListener("click", setTime)

// presented with a question when clicked 

function theQuestions() {
// if (button.addEventListener = ("click")) {
    for (var i = 0; i < questions.length; i++) {
       var firstArray =  questions[0];
   
    }
  
   
}

 console.log(askQuestions)

button.addEventListener = ("click", theQuestions);


// iterate over the list of questions
    // if a user clicked on an answer
    // check the text of the answer (or maybe some data property)
    // compare that value to the correct answer
    // if (the thing the user answered is correct)
    //    display correct!
    // else
    //    display incorrect
    //    subtract time
    // console.log(dansQuestions);
    // localStorage.setItem("testItem", "abcdefghijkl");













// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score