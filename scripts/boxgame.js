let boxgame = {};
const score = document.querySelector(".score");
const gameAreaEl = document.querySelector(".gameArea");
const gameArea = gameAreaEl.getBoundingClientRect();
let squares = [];
let gamebox = {
    x: Math.floor(gameArea.width/100),
    y: Math.floor(gameArea.height/100)
};

let player = {
    speed: 100,
    square: 1,
    score: 0
};

document.addEventListener('DOMContentLoaded', build);
document.addEventListener('keyup', function (e) {
    const allowKey = {
        37:'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if(allowKey[e.keyCode])
    {handleKey(allowKey[e.keyCode])}
});

function makeActive() {
    let randomIndex = Math.floor(Math.random() * squares.length);

    if (randomIndex != 0 && player.square != randomIndex){
        squares[randomIndex].classList.add('active');
    } else {
        makeActive();
    }

}

function handleKey(key){
    if (key === 'left' && boxgame.x > gameArea.left) {
        boxgame.x -= player.speed;
        player.square--;
    }
    if (key === 'right' && boxgame.x < gameArea.right - boxgame.offsetWidth) {
        boxgame.x += player.speed;
        player.square++;
    }
    if (key === 'up'&& boxgame.y > gameArea.top) {
        boxgame.y -= player.speed;
        player.square -= gamebox.y;
    }
    if (key === 'down' && boxgame.y < (gameArea.bottom - boxgame.offsetHeight)) {
        boxgame.y += player.speed;
        player.square += gamebox.y;
    }
    boxgame.style.left = boxgame.x + 'px';
    boxgame.style.top = boxgame.y + 'px';

    console.log(squares[player.square]);
    if (!!squares[player.square].classList.contains('active')){
        console.log('FOUND');
        squares[player.square].classList.remove('active')
        makeActive();
        player.score++;
        score.innerHTML = player.score;
    }
}

function build () {
    boxgame = document.createElement("div");
    boxgame.classList.add("boxgame");
    boxgame.x = gameArea.top;
    boxgame.y = gameArea.left;
    boxgame.style.top = boxgame.y + 'px';
    boxgame.style.left = boxgame.x + 'px';
    gameAreaEl.appendChild(boxgame);
    let counter = 1;

    for(let y = 0; y < gamebox.y; y++){
        for(let x = 0; x < gamebox.x; x++){
            squares[counter] = document.createElement("div");
            squares[counter].innerHTML = counter;
            squares[counter].classList.add('square');
            gameAreaEl.appendChild(squares[counter]);
            counter++;
        }
     }
    makeActive();
}