const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const showAnswer = document.querySelector('[data-js="showAnswer"]');
const answerText = document.querySelector('[data-js="answerText"]');

// Toggle for card bookmark icon
bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("toggle-bookmark");
});

// Toggle the answer text and show/hide answer/hide text
answerButton.addEventListener("click", (event) => {
  event.preventDefault();
  answerText.toggleAttribute("hidden");
  if (showAnswer.textContent === "Show Answer") {
    showAnswer.textContent = "Hide Answer";
  } else {
    showAnswer.textContent = "Show Answer";
  }
});
