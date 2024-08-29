const button = document.querySelector(".btn");
const mode = document.querySelector(".mode-container img");

let animeList = 
    [   "Jujutsu Kaisen",
        "Attack On Titan",
        "Kimi No Nawa",
        "Suzume",
        "Weathering With You",
        "Death Note",
        "Mob Psycho 100",
        "Blue Lock",
        "Monster",
        "Vinland Saga"
    ]

button.addEventListener("click", gantiGambar);

function gantiGambar(){
    const coverAnime = document.querySelector(".cover-anime");
    const randomNumber = (Math.floor(Math.random() * 10) + 1) ;

    const namaAnime = document.querySelector(".nama-anime");

    console.log(randomNumber);
    coverAnime.setAttribute("src", "images/anime"+randomNumber+".jpg")
    namaAnime.innerHTML = animeList[randomNumber - 1]
}

mode.addEventListener("click", changeMode);

function changeMode(){
    let element = document.querySelector(".light-mode");
    element.classList.toggle("dark-mode");

    if(mode.getAttribute("src") == "images/dark-mode.svg"){
        mode.setAttribute("src", "images/light-mode.svg")
    }
    else if(mode.getAttribute("src") == "images/light-mode.svg"){
        mode.setAttribute("src", "images/dark-mode.svg")
    }
}