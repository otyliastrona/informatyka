const canvas = document.getElementById('zegarek');
const ctx = canvas.getContext('2d');

function setupCanvas() {
  const size = Math.min(window.innerWidth * 0.9, 400); // maks. 400px, dopasuj do ekranu
  canvas.width = size;
  canvas.height = size;

  const radius = size / 2;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transformacji
  ctx.clearRect(0, 0, size, size);
  ctx.translate(radius, radius); // środek zegara

  return radius;
}

function drawClock() {
  const radius = setupCanvas();
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.95, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();

  ctx.strokeStyle = '#333';
  ctx.lineWidth = radius * 0.05;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let num = 1; num <= 12; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.8);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.8);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = hour % 12;
  let hourAngle = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
  drawHand(ctx, hourAngle, radius * 0.5, radius * 0.07);

  let minuteAngle = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minuteAngle, radius * 0.75, radius * 0.07);

  let secondAngle = second * Math.PI / 30;
  drawHand(ctx, secondAngle, radius * 0.85, radius * 0.02, 'red');
}

function drawHand(ctx, pos, length, width, color = '#333') {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
setInterval(drawClock, 1000);
window.addEventListener('resize', drawClock);
drawClock();
