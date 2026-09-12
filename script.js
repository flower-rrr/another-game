const canvas = document.getElementById("game");

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
    gameUpdate();
    gameDraw();
  } else if (ui == "title") {
    titleDraw();
  }
  requestAnimationFrame(mainloop);
}

