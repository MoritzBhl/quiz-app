const body = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
// link css
