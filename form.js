// For new cards
const newQuestionCard = document.querySelector('[data-js="form"]');
// For calculate character
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const maxLengthQuestion = questionInput.getAttribute("maxLength");
const maxLengthAnswer = answerInput.getAttribute("maxLength");
// -----------------------------------------------------------------------------------------

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
// -----------------------------------------------------------------------------------------
// Create new card and show them below the question cards
newQuestionCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // Create new card
  const newSection = document.createElement("section");
  newSection.classList.add("card");
  newSection.innerHTML = `
  <h2>${data.questionInput}</h2>
  <button class="button-bookmark">
            <i
              class="fas fa-bookmark fa-2xl card-bookmark toggle-bookmark"
              data-js="bookmarkIcon"
            ></i>
          </button>
          <div class="button-section">
            <button class="answer-button" data-js="showAnswerButton">
              Show Answer
            </button>
          </div>
          <p hidden data-js="answerText">
            ${data.answerInput}
          </p>
          <ul class="tags">
            <li>${data.tag}</li>
          </ul>
  `;
  {
  }
  document.body.append(newSection);
  event.target.reset();
  formElements.questionInput.focus();
});
