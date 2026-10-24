let c = document.getElementsByTagName('canvas')[0];
let ctx = c.getContext('2d');

let width = c.width;
let height = c.height;


function circle(t, r = 1, h = 0, k = 0) {
  return [h + r * Math.cos(t), k + r * Math.sin(t)];
}

let N = 100;
let r = 50;
let points = Array.from({ length: 2 * N }, () => [0.0, 0.0]);
let origin = [width / 2, height / 2];
ctx.fillRect(origin[0], origin[1], 1, 1);

for (let i = 0; i < 2 * N; i++) {
  let t = i * ((2 * Math.PI) / ((2 * N) - 1));
  let p = circle(t, r, origin[0], origin[1]);
  points[i] = p;
  ctx.fillRect(p[0], p[1], 1, 1);
}

for (let i = 0; i < N; i++) {
  let from = points[i];
  let to = points[(2 * i) % (2 * N)];

  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

for (let i = N; i < 2 * N; i++) {
  let from = points[i];
  let to = points[(2 * i) % (2 * N)];

  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}