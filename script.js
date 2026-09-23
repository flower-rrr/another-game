const randint = (start, stop) => {
  return Math.floor(Math.random() * (stop-start+1));
};


const title = document.getElementById("title");
const startForm = document.getElementById("startForm");
const game = document.getElementById("game");
const canvas = document.getElementById("gameCanva");

startForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let nickname = document.getElementById("nicknameInput").value;
  console.log(nickname);
  document.getElementById("nicknameInput").value = "";
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
let test = 0;

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false, 
  ArrowRight: false
};

window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);

window.startGame = function() {
  ui = "game";
  const player = Entity("player", 1, 0, 0, {}, nickname)
  mainLoop();

function gameUpdate() {


}

function gameDraw() {


}

function titleDraw() {

}

function mainLoop() {
  
  
  if (ui == "game") {
    game.style.display = "block"
    title.style.display = "none"
    gameUpdate();
    gameDraw();
  } else if (ui == "title") {
    
    game.style.display = "none"
    title.style.display = "flex"
    titleDraw();
  }
  test = test + 1;
  if (test % 3000 == 0) {
    console.log(test)
    console.log(ui)
    
  }
  requestAnimationFrame(mainLoop);
}


