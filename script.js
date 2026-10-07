const randint = (start, stop) => {
  return Math.floor(Math.random() * (stop-start+1));
};

let transalpha = 255
let nickname;
let lt = 0;
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
});



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

function gameUpdate(dt) {


}

function gameDraw() {
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  //轉場
  ctx.fillStyle = "000000" + transalpha.toString(16);
  ctx.fillRect(0, 0, canvas.width, canvas.height)

}

function mainLoop(t) {
  dt = (t - lt)/1000
  
  if (ui == "game") {
    game.style.display = "block";
    title.style.display = "none";
    gameUpdate(dt);
    gameDraw();
  } else if (ui == "title") {
    
    game.style.display = "none";
    title.style.display = "flex";
    
  }
  requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);
