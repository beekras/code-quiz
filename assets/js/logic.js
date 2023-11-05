// 1) select HTML elements
var button = document.getElementById("start");
var timer = document.getElementById("time");
var askQuestions = document.getElementById("question-title");
var choices = document.querySelector(".choices");
var start = document.querySelector(".start");
var hiddenQuestions = document.getElementById("questions");

// WHEN I click the start button THEN a timer starts and I am presented with a question
var timeLeft = 75;

function setTimeAndQuestions() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  start.setAttribute("style", "display: none");
  hiddenQuestions.classList.remove("hide");
  // first question
  var index = 0;
  // questions[i].question
  // click on button to bring up next question
  // for (var i = 0; i < questions.length; i++) {
  askQuestions.textContent = questions[index].question;

  // for loop for answer array //
  var data = questions[index].answers;
  for (var j = 0; j < data.length; j++) {
    const answerButton = document.createElement("button");
    answerButton.textContent = j + 1 + ". " + data[j];
    choices.appendChild(answerButton);
  }
  // addEventListener to log clicks on the buttons and increase index - checking choices div, therefore need function to check if button is clicked and not rest of div
  choices.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    index = index + 1;
    console.log(index);
    // change the text content and answers to the next question
    askQuestions.textContent = questions[index].question;
    data = questions[index].answers;
    var allButtons = document.querySelectorAll("button"); // selects all buttons that we created in the for loop 
    for (var j = 0; j < data.length; j++) {
      allButtons[j].textContent = j + 1 + ". " + data[j];
    }
  });
}

// setTime only when start quiz button is pressed
button.addEventListener("click", setTimeAndQuestions);

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
