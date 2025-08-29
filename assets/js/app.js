"use strict";

const question = document.querySelectorAll(".faq-question-box");
const icon = document.querySelectorAll(".icon");
const answer = document.querySelectorAll(".faq-answer");

question.forEach((q, i) => {
  q.addEventListener("click", () => {
    answer[i].classList.toggle("hidden");

    if (answer[i].classList.contains("hidden")) {
      icon[i].src = "/assets/images/icon-plus.svg";
    } else {
      {
        icon[i].src = "/assets/images/icon-minus.svg";
      }
    }
  });
});

// icon.forEach((ico, i) => {
//   console.log(ico[i]);
// });
