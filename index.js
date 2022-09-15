"use strict";
let score = 0;
let answer;
let numberOfAnswers = 0;
const questions = Array.from(document.querySelectorAll(".question"));
const scoreMessage = document.querySelector("#score");
const errorMessage = document.querySelector("#error");
let questionIndex = Math.round(Math.random() * (questions.length - 1));
questions[questionIndex].style.opacity = "1";
questions[questionIndex].style.zIndex = "20";

document.querySelector("#next").addEventListener("click", next);
document.querySelector("#close").onclick = () =>
  (errorMessage.style.visibility = "hidden");

function next() {
  getAnswer();
}
function nextQuestion() {
  questions.forEach((question) => {
    question.style.opacity = "0";
    question.style.zIndex = "-20";
  });
  if (questionIndex < questions.length - 1) questionIndex += 1;
  else questionIndex = 0;

  questions[questionIndex].style.opacity = "1";
  questions[questionIndex].style.zIndex = "20";
}
function getAnswer() {
  if (questionIndex === 0) {
    checkAnswer({
      userAnswer: document.querySelector('input[name="inline"]:checked'),
      ans: "inline",
    });
  } else if (questionIndex === 1) {
    checkAnswer({
      userAnswer: document.querySelector('input[name="href"]:checked'),
      ans: "href",
    });
  } else if (questionIndex === 2) {
    checkAnswer({
      userAnswer: document.querySelector('input[name="3ways"]:checked'),
      ans: "3ways",
    });
  } else if (questionIndex === 3) {
    checkAnswer({
      userAnswer: document.querySelector('input[name="yellow"]:checked'),
      ans: "c",
    });
  }
  if (numberOfAnswers === questions.length) {
    document.querySelector("button").removeEventListener("click", next);
    scoreMessage.innerHTML = `<p>Your Score is ${score}/${questions.length}</p>`;
    scoreMessage.style.opacity = "0.8";
    scoreMessage.style.zIndex = "30";
  }
}

function checkAnswer({ userAnswer, ans }) {
  try {
    userAnswer = userAnswer.value;
    numberOfAnswers += 1;
    nextQuestion();
  } catch (error) {
    errorMessage.style.visibility = "visible";
  }

  if (userAnswer === ans) score++;
}