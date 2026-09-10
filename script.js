const canvas = document.getElementById("game")

const ctx = canvas.getContext("2d")

window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);

function update() {


}

function draw() {


}

function gameloop() {
  update()
  draw()
  requestAnimationFrame(gameloop)
}

