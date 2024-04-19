const wrapper = document.querySelector(".wrapper");
const buttonElement = document.querySelector(".header__button");

let theme = localStorage.getItem("theme") || "light";

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  wrapper.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

buttonElement.addEventListener("click", () => {
  wrapper.classList.add("theme-transition");
  changeTheme();

  setTimeout(() => {
    wrapper.classList.remove("theme-transition");
  }, 300);
});

window.addEventListener("load", () => {
  wrapper.setAttribute("data-theme", theme);
});
