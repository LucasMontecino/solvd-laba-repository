const mainContainer = document.querySelector(".main__container");

const rows = 30;
const cols = 20;
let number = 1;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    mainContainer.innerHTML += `
            <div class="main__item">
                ${number}
            </div>
        `;
    number++;
  }
}
