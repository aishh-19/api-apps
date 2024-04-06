let input = document.querySelector("#search-input");
let searchbtn = document.querySelector(".search");
let container = document.querySelector(".container");

searchbtn.addEventListener("click" , async function fetching(){
    try{
        let api = await  fetch  (`https://www.omdbapi.com/?i=tt3896198&apikey=3003e929&s=${input.value}`);
        let readable = await api.json();
        console.log(readable)
        readable.Search.forEach(ele=> {
            let card = document.createElement("div");
            let img = document.createElement("img");
            img.src = ele.Poster;
            let title = document.createElement("h3");
            title.innerHTML = ele.Title
            let year = document.createElement("h3");
            year.innerHTML = ele.Year;
            let type = document.createElement("h3")
            type.innerHTML = ele.Type
            let imdbID = document.createElement("h4");
            imdbID.innerHTML = ele.imdbID;
            card.append(img,title,type,imdbID);
            container.append(card);
        });

    }
    catch(err){
        console.log("error have been found!!!")
    }
})