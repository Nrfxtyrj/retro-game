const dino = document.getElementById("dino")
const cactus =document.getElementById("cactus")
let modal = document.getElementById('myModal');
const p = document.getElementById('resuilt');
let score= 0;
const ps = document.getElementById('score');
document.addEventListener("keydown", function(event) {
    jump ();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump"); 
    }
    setTimeout (function () {
        dino.classList.remove("jump"); 
    },300)
}
let isAlive = setInterval (function () {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 60 && cactusLeft > 50 && dinoTop >= 290) {

    clearInterval(setTimeout)
    modal.style.display = "block";
    p.innerHTML= `Store: ${score}`;
    cactus.style.animation = 'null';
    dino.style.animation = 'null';
    } else if (cactusLeft < -19) {
        score++
        ps.innerHTML= `Store: ${score}`;
    }
}, 10)

fetch('https://api.nasa.gov/planetary/apod?api_key=AnEg0dilz5BcgpPtTOc5EWHsQLpR9JmopRQ9aqnU')
.then(response => response.json())
.then(data => {
    console.log(data);
})

