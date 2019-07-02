class ChaserGameComponent {

box = {};
score = document.querySelector(".score");
gameAreaEl = document.querySelector(".gameArea");
gameArea = this.gameAreaEl.getBoundingClientRect();
squares = [];
gamebox = {
    x: Math.floor(this.gameArea.width/100),
    y: Math.floor(this.gameArea.height/100)
};

player = {
    speed: 100,
    square: 1,
    score: 0
};
init = () => {
  document.addEventListener('DOMContentLoaded', this.build);
  document.addEventListener('keyup', function (e) {
      const allowKey = {
          37:'left',
          38: 'up',
          39: 'right',
          40: 'down'
      };
      if(allowKey[e.keyCode])
      {game.handleKey(allowKey[e.keyCode])}
  });
};

makeActive = () => {
    let randomIndex = Math.floor(Math.random() * this.squares.length);

    if (randomIndex != 0 && this.player.square != randomIndex){
        this.squares[randomIndex].classList.add('active');
    } else {
        this.makeActive();
    }

};

handleKey = (key) => {
    if (key === 'left' && this.box.x > this.gameArea.left) {
        this.box.x -= this.player.speed;
        this.player.square--;
    }
    if (key === 'right' && this.box.x < this.gameArea.right - this.box.offsetWidth) {
        this.box.x += this.player.speed;
        this.player.square++;
    }
    if (key === 'up'&& this.box.y > this.gameArea.top) {
        this.box.y -= this.player.speed;
        this.player.square -= this.gamebox.x;
    }
    if (key === 'down' && this.box.y < (this.gameArea.bottom - this.box.offsetHeight)) {
        this.box.y += this.player.speed;
        this.player.square += this.gamebox.x;
    }
    this.box.style.left = this.box.x + 'px';
    this.box.style.top = this.box.y + 'px';

    if (!!this.squares[this.player.square].classList.contains('active')){
        this.squares[this.player.square].classList.remove('active')
        this.makeActive();
        this.player.score++;
        this.score.innerHTML = this.player.score;
    }
}

build = (key) => {
    this.box = document.createElement("div");
    this.box.classList.add("box");
    this.box.x = this.gameArea.top;
    this.box.y = this.gameArea.left;
    this.box.style.top = this.box.y + 'px';
    this.box.style.left = this.box.x + 'px';
    this.gameAreaEl.appendChild(this.box);
    let counter = 1;

    for(let y = 0; y < this.gamebox.y; y++){
        for(let x = 0; x < this.gamebox.x; x++){
            this.squares[counter] = document.createElement("div");
            this.squares[counter].innerHTML = counter;
            this.squares[counter].classList.add('square');
            this.gameAreaEl.appendChild(this.squares[counter]);
            counter++;
        }
     }
    this.makeActive();
}
}
const game = new ChaserGameComponent();

game.init();
