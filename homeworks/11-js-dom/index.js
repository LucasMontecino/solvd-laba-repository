const mainContainer = document.querySelector(".main__container");

const rows = 30;
const cols = 20;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    const cell = document.createElement("div");
    cell.classList.add("main__item");
    cell.dataset.row = i;
    cell.dataset.col = j;
    mainContainer.appendChild(cell);
  }
}

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("main__item")) {
    document.querySelectorAll(".main__item").forEach((item) => {
      item.classList.remove("selected", "active-row", "active-col");
      item.textContent = "";
    });

    const cell = e.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    cell.classList.add("selected");
    cell.textContent = `${row}/${col}`;

    document
      .querySelectorAll(`.main__item[data-row="${row}"]`)
      .forEach((item) => item.classList.add("active-row"));
    document
      .querySelectorAll(`.main__item[data-col="${col}"]`)
      .forEach((item) => item.classList.add("active-col"));
  }
});
