const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, 640, 640)

const FPS = 10;

function frame() {
  const randomColor = () => Math.floor(Math.random() * 256);
  const color = `rgba(${randomColor()},${randomColor()},${randomColor()}, 1)`
  console.log(color)

  ctx.beginPath()
  ctx.moveTo(200, 200)
  ctx.lineTo(400, 400)
  ctx.strokeStyle = color
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(400, 200)
  ctx.lineTo(200, 400)
  ctx.strokeStyle = color
  ctx.stroke()

  return setTimeout(() => {
    requestAnimationFrame(frame)
  }, 1000 / FPS)
}

requestAnimationFrame(frame)