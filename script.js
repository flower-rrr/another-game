const title = document.getElementById("title")
const game = document.getElementById("game")
const canvas = document.getElementById("gameCanva");

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
  console.log("changed")};

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
  requestAnimationFrame(mainloop);
}

mainloop();
