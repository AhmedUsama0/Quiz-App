"use strict";
let score = 0,
  userAnswers,
  questionIndex;

const questions = Array.from(document.querySelectorAll(".question"));

const scoreMessage = document.querySelector("#score");

const leftQuestions = document.querySelector("#left_Questions");

let answers = ["inline", "href", "3ways", "c"];

startGame();

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", next);

function next() {
  checkAnswer();
  if (userAnswers.length === questions.length) {
    nextButton.removeEventListener("click", next);
    scoreMessage.innerHTML = `<p>Your Score is ${score}/${questions.length}</p> <button id="play_again">Play Again</button>`;
    scoreMessage.style.opacity = "0.8", scoreMessage.style.zIndex = "30";
    document.querySelector("#play_again").addEventListener("click", playAgain);
  }
}
function nextQuestion() {
  questions.forEach(question => question.style.display = "none");
  questionIndex < questions.length - 1 ? questionIndex++ : questionIndex = 0;
  questions[questionIndex].style.display = "block";
}
function checkAnswer() {
  userAnswers = document.querySelectorAll("input:checked");
  answers.forEach((a) => {
    userAnswers.forEach((user) => {
      if (a === user.value) {
        answers = answers.filter((aa) => aa !== a);
        score++;
      }
    });
  });

  leftQuestions.textContent = `${questions.length - userAnswers.length} Questinos Left`;
  nextQuestion();
}

function startGame() {
  questionIndex = Math.round(Math.random() * (questions.length - 1));
  questions[questionIndex].style.display = "block";
  leftQuestions.textContent = `${questions.length} Questions Left`;
}
function playAgain() {
  score = 0;
  userAnswers.forEach((checkbox) => (checkbox.checked = false));
  scoreMessage.style.opacity = "0", scoreMessage.style.zIndex = "-30";
  nextButton.addEventListener("click", next);
  questions.forEach(question => question.style.display = "none");
  startGame();
}