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

async function fetchUsers() {
  try {
    let response = await fetch(
      "https://randomuser.me/api/?gender=female&results=10"
    );

    if (!response.ok) throw new Error(`No data to fetch.`);

    let usersData = await response.json();
    createUsers(usersData.results);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

fetchUsers();
