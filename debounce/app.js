let input = document.querySelector("input");
let container = document.querySelector(".container")
input.addEventListener("input", () => {
    let value = input.value; // Capture the current value inside the event listener
    fetchData(fetchApi, 1000, value); // Pass the value to fetchData
});

let id;

function fetchData(func, delay, value) {
    clearTimeout(id); // Use clearTimeout instead of clearInterval
    id = setTimeout(() => {
        func(value); // Pass the value to fetchApi
    }, delay);
}

async function fetchApi(value) {
    let api = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c53f3770&s=${value}`);
    let res = await api.json();
    console.log(res);
    displayData(res.Search);
}
function displayData(data){
    container.innerHTML = "";
data.forEach(ele => {
    let box = document.createElement("div");
box.classList.add("box");
let title = document.createElement("a");
title.innerText = ele.Title;
title.addEventListener("click",()=>{
window.location.href = `https://www.imdb.com/title/${ele.imdbID}/`
})
container.append(box);
box.append(title);
});
}