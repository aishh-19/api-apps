let container = document.querySelector(".container");
let buttonbox = document.querySelector(".buttons");
let api = `https://jsonplaceholder.typicode.com`;
let currentPage = 1;
let limit = 6;
let totalPages;

async function fetchAndDisplayUsers(page) {
    try {
        let response = await fetch(`${api}/users?_page=${page}&_limit=${limit}`);
        let users = await response.json();
        console.log(users);

        container.innerHTML = "";
        users.forEach(user => {
            let card = document.createElement("div");
            card.classList.add("card");
            let id = document.createElement("h4");
            id.innerHTML = user.id;
            let title = document.createElement("h2");
            title.innerHTML = user.name;
            let username = document.createElement("h4");
            username.innerHTML = user.username;
            let email = document.createElement("h4");
            email.innerHTML = user.email;
            card.append(id, title, username, email);
            container.append(card);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

async function handlePagination(event) {
    currentPage = parseInt(event.target.textContent);
    await fetchAndDisplayUsers(currentPage);
}

async function firstSix() {
    try {
        let response = await fetch(`${api}/users`);
        let totalUsers = await response.json();
        totalPages = Math.ceil(totalUsers.length / limit);

        fetchAndDisplayUsers(currentPage);

        for (let i = 1; i <= totalPages; i++) {
            let button = document.createElement("button");
            button.textContent = i;
            button.addEventListener("click", handlePagination);
            buttonbox.appendChild(button);
        }
    } catch (error) {
        console.log("Error found:", error);
    }
}

firstSix();
