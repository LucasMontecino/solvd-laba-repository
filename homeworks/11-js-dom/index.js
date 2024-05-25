const mainContainer = document.querySelector(".main__container");

const rows = 30;
const cols = 20;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    mainContainer.innerHTML += `
            <div class="main__item">
              ${i}/${j}
            </div>
        `;
  }
}

mainContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    console.log(e.target.innerText);
  }
});
