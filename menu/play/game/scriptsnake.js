const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let modal = document.getElementById('myModal');
const p = document.getElementById('resuilt');
let dir;

const ground = new Image();
ground.src = "imggame/arena.png";

const foodImg = new Image();
foodImg.src = "imggame/food.png";

let box = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box, 
    y: Math.floor((Math.random() * 15 + 3)) * box, 
};

let snake = [];
snake [0] = { 
    x: 9 * box, 
    y: 10 * box
};

document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode == 37 && dir !="right")
        dir = "left";
    else  if (event.keyCode == 38 && dir !="down")
        dir = "up";
    else  if (event.keyCode == 39 && dir !="left")
        dir = "right";
    else  if (event.keyCode == 40 && dir !="up")
        dir = "down";
}



function drawGame () {
    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if(snakeX < box || snakeY > box * 17 || snakeY < 3 * box || snakeY > box * 17 || snakeX > box * 17) {
        clearInterval(game)
        modal.style.display = "block";
        p.innerHTML= `Sсore: ${score}`;
    }

    if(dir == "left"){
        snakeX -= box;
    } else if(dir == "right"){
        snakeX += box;
    } else if(dir == "up"){
        snakeY -= box;
    } else if(dir == "down"){
        snakeY += box;
    } 

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    

    snake.unshift(newHead);

    ctx.drawImage (ground, 0, 0);
    
    ctx.drawImage (foodImg, food.x, food.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "rgb(209, 7, 132)";
        ctx.fillRect (snake[i].x, snake[i].y, box, box);
    }
    
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText(score, box * 2.5, box * 1.7);

    if(snakeX == food.x && snakeY == food.y){
        score++
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box, 
            y: Math.floor((Math.random() * 15 + 3)) * box, 
        };
    }else {
        snake.pop();
    }
}

let game = setInterval (drawGame, 150);