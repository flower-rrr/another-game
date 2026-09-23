const randint = (start, stop) => {
  return Math.floor(Math.random() * (stop-start+1));
};

let nickname;
const title = document.getElementById("title");
const startForm = document.getElementById("startForm");
const game = document.getElementById("game");
const canvas = document.getElementById("gameCanva");

startForm.addEventListener("submit", function(event) {
  event.preventDefault();
  nickname = document.getElementById("nicknameInput").value;
  console.log(nickname);
  document.getElementById("nicknameInput").value = "";
  ui = "game";
  const player = Entity("player", 1, 0, 0, {}, nickname);
});

class Entity {
  constructor(type = "player", level = 1, x, y, state = {}, name = "") {
    this.type = type;
    this.level = level;
    this.x = x;
    this.y = y;
    this.state = state;
    this.name = name;
  }
  
  
  
}



const ctx = canvas.getContext("2d");
let ui = "title";

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false, 
  ArrowRight: false
};

window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);

function gameUpdate() {


}

function gameDraw() {


}

function titleDraw() {

}

function mainLoop() {
  
  
  if (ui == "game") {
    game.style.display = "block";
    title.style.display = "none";
    gameUpdate();
    gameDraw();
  } else if (ui == "title") {
    
    game.style.display = "none";
    title.style.display = "flex";
    titleDraw();
  }
  
    
  }
  requestAnimationFrame(mainLoop);
}

mainLoop();
