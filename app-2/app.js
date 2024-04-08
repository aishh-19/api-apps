let container = document.querySelector(".container");
let select = document.querySelector("#byOrder");
let sortOrder = 'asc'; // Default sorting order

select.addEventListener("change", async function getapi() {
    try {
        // Toggle sorting order
        sortOrder = (sortOrder === 'asc') ? 'desc' : 'asc';
        
        let value = select.value;
        let api = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;
        let api2 = `?sort=population&order=${sortOrder}`;
        let finalapi = api + api2;

        let finalconver = await fetch(finalapi);
        let readable = await finalconver.json();
        
        // Clear existing cards
        container.innerHTML = '';

        // Create card for each country
        readable.forEach(country => {
            let card = createCard(country);
            container.appendChild(card);
        });
    } catch (err) {
        console.log("error", err);
    }
});

function createCard(countryData) {
    let card = document.createElement('div');
    card.classList.add('card');

    let countryName = document.createElement('h2');
    countryName.textContent = countryData.name;

    let population = document.createElement('p');
    population.textContent = `Population: ${countryData.population}`;

    let capital = document.createElement('p');
    capital.textContent = `Capital: ${countryData.capital}`;

    // Add country data to card
    card.appendChild(countryName);
    card.appendChild(population);
    card.appendChild(capital);

    return card;
}
