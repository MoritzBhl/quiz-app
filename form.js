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

function calculateCharacters(totalQuestion, totalAnswer) {
  amountLeftQuestion.textContent = totalQuestion;
  amountLeftAnswer.textContent = totalAnswer;
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
  <a href="">
            <i class="fas fa-bookmark fa-2xl card-bookmark"></i>
          </a>
          <div class="button-section">
            <button class="answer-button" data-js="newAnswerButton">
              <a href="" class="show-answer">Show Answer</a>
            </button>
          </div>
          <p hidden>${data.answerInput}</p>
          <div class="tags">
            <p>#${data.tag}</p>
          </div>
  `;
  document.body.append(newSection);
  event.target.reset();
  formElements.questionInput.focus();
  // Prevent the answer button from refreshing, when klicking
  const newAnswerButton = document.querySelector('[data-js="newAnswerButton"]');
  newAnswerButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
