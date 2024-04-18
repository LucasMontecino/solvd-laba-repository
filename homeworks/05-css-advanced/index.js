const wrapper = document.querySelector(".wrapper");
const buttonElement = document.querySelector(".header__button");

let theme = localStorage.getItem("theme") || "light";

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  wrapper.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

buttonElement.addEventListener("click", () => {
  changeTheme();
});
