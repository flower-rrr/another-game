const title = document.getElementById("title")
const game = document.getElementById("game")
const canvas = document.getElementById("gameCanva");

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
    game.style.display = "block"
    title.style.display = "none"
    gameUpdate();
    gameDraw();
  } else if (ui == "title") {
    game.style.display = "none"
    title.style.display = "block"
    titleDraw();
  }
  requestAnimationFrame(mainloop);
}

