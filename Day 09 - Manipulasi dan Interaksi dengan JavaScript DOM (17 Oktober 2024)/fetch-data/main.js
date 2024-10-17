let users = [];
const api = "https://randomuser.me/api";
const results = 12;
let page = 5;
let currentPage = 1;

function fetchData() {
    document.getElementById("loading").style.display = "block";
    fetch(`${api}?results=${results}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        document.getElementById("loading").style.display = "none";
        users = data.results;
        displayUser(users);
        document.getElementById("page-number").innerText = `Page ${currentPage}`;
        document.getElementById("prev-button").disabled = currentPage === 1;
        document.getElementById("next-button").disabled = currentPage === page;
      })
      .catch((error) => {
        document.getElementById("loading").style.display = "none";
        console.error('Error fetching data:', error);
      });
}

function displayUser(users) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `<img
    alt="${user.name.first}"
    src="${user.picture.large}"
  />
  <h2>${user.name.first} ${user.name.last}</h2>
  <p>${user.email}</p>
  <p>${user.location.city}, ${user.location.country}</p>`;

    userContainer.appendChild(userCard);
  });
}

function handleSearch() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(query) ||
      user.name.last.toLowerCase().includes(query)
  );
  displayUser(filteredUsers);
}

function changePage(direction) {
  currentPage += direction;
  fetchData(currentPage);
}

fetchData(currentPage);
