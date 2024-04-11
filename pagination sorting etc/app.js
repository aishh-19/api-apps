let container = document.querySelector(".container");
let buttons = document.querySelector(".buttons");
let api = `https://jsonplaceholder.typicode.com/todos`;

function btnfunction() {
    let total = 200;
    let limit = 6;
    let pagesbtn = Math.ceil(total / limit);
    for (let i = 1; i <= pagesbtn; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        buttons.appendChild(btn);
         btn.addEventListener("click", async function displayData(){
           try{
            let apiSort = `${api}?_page=${i}&limit=200`;
            console.log(apiSort);
           await getdata(apiSort)
           }catch(err){
console.log("error found")
           }
         })
    }
}

async function getdata(apiget) {
    let fetchapi = await fetch(apiget);
    let readable = await fetchapi.json();
    console.log(readable);
       await displayData(readable);
}
let displayData=(data)=>{
container.innerHTML = ""
data.forEach(element => {
    let card = document.createElement("div")
    card.classList.add("card");
    let title = document.createElement("h3")
    title.innerHTML = element.title;
    let id = document.createElement("h5")
    id.innerHTML = element.id
card.append(title, id);
container.append(card);
});
}

// Call the functions
btnfunction();
getdata();
