// Create new card and show them below the question cards
const questionForm = document.querySelector('[data-js="questionForm"]');
const submit = document.querySelector('[data-js="submit"]');

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const newSection = document.createElement("section");
  newSection.classList.add("card");
  newSection.innerHTML = `
  <h2>${data.newQuestion}</h2>
  <a href="">
            <i class="fas fa-bookmark fa-2xl card-bookmark"></i>
          </a>
          <div class="button-section">
            <button class="answer-button">
              <a href="" class="show-answer">Show Answer</a>
            </button>
          </div>
          <p hidden>${data.newAnswer}</p>
          <div class="tags">
            <p>#${data.tag}</p>
          </div>
  `;
  document.body.append(newSection);
  event.target.reset();
  formElements.newQuestion.focus();
});