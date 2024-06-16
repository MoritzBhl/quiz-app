export function Calculate() {
  const newQuestionCard = document.querySelector('[data-js="form"]');
  const amountLeftQuestion = document.querySelector(
    '[data-js="amountLeftQuestion"]'
  );
  const amountLeftAnswer = document.querySelector(
    '[data-js="amountLeftAnswer"]'
  );
  const questionInput = document.querySelector('[data-js="questionInput"]');
  const answerInput = document.querySelector('[data-js="answerInput"]');
  const maxLengthQuestion = questionInput.getAttribute("maxLength");
  const maxLengthAnswer = answerInput.getAttribute("maxLength");
  function calculateCharacters(totalCharactersQuestion, totalCharactersAnswer) {
    amountLeftQuestion.textContent = totalCharactersQuestion;
    amountLeftAnswer.textContent = totalCharactersAnswer;
  }
  newQuestionCard.addEventListener("input", (event) => {
    calculateCharacters(
      maxLengthQuestion - questionInput.value.length,
      maxLengthAnswer - answerInput.value.length
    );
  });
}
