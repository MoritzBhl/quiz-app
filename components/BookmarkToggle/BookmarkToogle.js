export function BookmarkToggle() {
  const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("toggle-bookmark");
  });
}
