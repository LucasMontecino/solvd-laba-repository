const listElement = document.querySelector(".main__container");

function createUsers(array) {
  array.forEach((item) => {
    listElement.innerHTML += `
            <div class="main__item">
                <img src="${item?.picture?.thumbnail}" class="main__img">
                <p class="main__title">
                    ${item?.name?.first} ${item?.name?.last}
                </p>
            </div>
        `;
  });
}

function xmlHttpRequestUsers() {
  try {
    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      "https://randomuser.me/api/?gender=female&results=10",
      true
    );
    xhr.onload = function () {
      let data = JSON.parse(xhr.responseText);
      createUsers(data.results);
    };
    xhr.send();
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

xmlHttpRequestUsers();
