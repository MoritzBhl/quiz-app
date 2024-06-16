export function ShowAnswer() {
  const showAnswerButton = document.querySelector(
    '[data-js="showAnswerButton"]'
  );
  const answerText = document.querySelector('[data-js="answerText"]');
  showAnswerButton.addEventListener("click", (event) => {
    answerText.toggleAttribute("hidden");
    if (answerText.hasAttribute("hidden")) {
      showAnswerButton.textContent = "Show Answer";
    } else {
      showAnswerButton.textContent = "Hide Answer";
    }
  });
}
