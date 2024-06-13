const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

// Toggle for card bookmark icon
bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("toggle-bookmark");
});

// Toggle the answer text and show/hide answer/hide text
showAnswerButton.addEventListener("click", (event) => {
  answerText.toggleAttribute("hidden");
  if (answerText.hasAttribute("hidden")) {
    showAnswerButton.textContent = "Show Answer";
  } else {
    showAnswerButton.textContent = "Hide Answer";
  }
});
