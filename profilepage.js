const darkMode = document.querySelector('[data-js="dark-mode"]');
const body = document.querySelector('[data-js="body"]');

const toggleDarkMode = darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
