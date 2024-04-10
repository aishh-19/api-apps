let select = document.querySelector("#byOrder");
let container = document.querySelector(".container");
let api =  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;

select.addEventListener("change", () => {
    let sortValue = select.value;
    console.log(sortValue)
    getdata(sortValue);
});

async function getdata(value) {
    try {
        let sort = `?sort=population&order=${value}`;
        let finalAPI = api + sort;
        let fetchapi = await fetch(finalAPI);
        let readableApi = await fetchapi.json();
        console.log(readableApi)
        displayData(readableApi);
    } catch (err) {
        console.log("caught an error:", err);
    }
}

function displayData(dataV) {
    container.innerHTML = ""; 
    dataV.data.forEach(ele => {
        let card = document.createElement("div");
        card.classList.add("card");
        let country_name = document.createElement("h3")
        country_name.innerHTML = ele.country;
        let population = document.createElement("h4");
        population.innerText = `population = ${ele.population}` 
        card.append(  country_name , population);
        container.appendChild(card);
    });
}
