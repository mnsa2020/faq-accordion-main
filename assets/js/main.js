const question = document.querySelectorAll(".question");

question.forEach((e) =>
  e.addEventListener("click", () => {
    let answer = e.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    e.classList.toggle("active");
  })
);
