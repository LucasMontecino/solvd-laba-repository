const wrapper = document.querySelector(".wrapper");
const buttonElement = document.querySelector(".header__button");
const buttonTop = document.querySelector(".scroll__button");

let theme = localStorage.getItem("theme") || "light";

function changeTheme() {
  theme = theme === "light" ? "dark" : "light";
  wrapper.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function scrollWindow() {
  if (window.scrollY !== 0) {
    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 15);
  }
}

buttonElement.addEventListener("click", () => {
  wrapper.classList.add("theme-transition");
  changeTheme();

  setTimeout(() => {
    wrapper.classList.remove("theme-transition");
  }, 300);
});

buttonTop.addEventListener("click", scrollWindow);

window.addEventListener("load", () => {
  wrapper.setAttribute("data-theme", theme);
});
