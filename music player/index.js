let buttons = document.querySelector(".buttons");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let play = document.querySelector(".play");
let playsong = document.querySelector("#play")
play.addEventListener("click", () => {
    let rotate = document.querySelector(".song-img");
    let music = document.querySelector("audio");

    if (music.paused) {
        music.play();
        rotate.classList.add("anime");
        console.log("Playing music");
        playsong.classList.replace('fa-play', 'fa-pause');
    } else {
        rotate.classList.remove("anime");
        console.log("Pausing music");
        music.pause()
        playsong.classList.replace('fa-pause', 'fa-play');
    }
    // Logging current class list of play button for debugging
    console.log("Play button classes:", play.classList);
});
