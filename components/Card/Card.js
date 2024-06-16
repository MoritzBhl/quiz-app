export function Card() {
  const newQuestionCard = document.querySelector('[data-js="form"]');
  newQuestionCard.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // Create new card
    const newSection = document.createElement("section");
    newSection.classList.add("card", "card-bookmark__form");
    newSection.innerHTML = `
          <h2>${data.questionInput}</h2>
          <button class="card-bookmark">
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
    // Bookmark toggle
    const bookmarkIcon = newSection.querySelector('[data-js="bookmarkIcon"]');
    bookmarkIcon.addEventListener("click", () => {
      bookmarkIcon.classList.toggle("toggle-bookmark");
    });
    // Show/Hide Answer
    const showAnswerButton = newSection.querySelector(
      '[data-js="showAnswerButton"]'
    );
    const answerText = newSection.querySelector('[data-js="answerText"]');
    showAnswerButton.addEventListener("click", (event) => {
      answerText.toggleAttribute("hidden");
      if (answerText.hasAttribute("hidden")) {
        showAnswerButton.textContent = "Show Answer";
      } else {
        showAnswerButton.textContent = "Hide Answer";
      }
    });
  });
}
