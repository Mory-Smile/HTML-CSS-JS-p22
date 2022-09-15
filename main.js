let questions = document.querySelectorAll(".q");
console.log(questions);

questions.forEach((question) => {
  let btn = question.querySelector(".q-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
