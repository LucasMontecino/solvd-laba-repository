let theme = localStorage.getItem("theme") || "light";
const bodyElement = document.querySelector("body");
const buttonTheme = document.querySelector(".button-container__button");

bodyElement.setAttribute("data-theme", theme);

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

buttonTheme.addEventListener("click", () => {
  changeTheme();
  bodyElement.setAttribute("data-theme", theme);
});
