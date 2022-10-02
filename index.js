"use strict";
let score = 0,
  userAnswers;
const questions = Array.from(document.querySelectorAll(".question"));
const scoreMessage = document.querySelector("#score");
const leftQuestions  = document.querySelector("#left_Questions");
leftQuestions.textContent = `${questions.length} Questions Left`;
let answers = ["inline", "href", "3ways", "c"];
let questionIndex = Math.round(Math.random() * (questions.length - 1));
questions[questionIndex].style.display = "block";

document.querySelector("#next").addEventListener("click", next);

function next() {
  checkAnswer();
  if (userAnswers.length === questions.length) {
    document.querySelector("#next").removeEventListener("click", next);
    scoreMessage.innerHTML = `<p>Your Score is ${score}/${questions.length}</p>`;
    scoreMessage.style.opacity = "0.8";
    scoreMessage.style.zIndex = "30";
  }
}
function nextQuestion() {
  questions.forEach((question) => {
    question.style.display = "none";
  });
  if (questionIndex < questions.length - 1) questionIndex++;
  else questionIndex = 0;

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
