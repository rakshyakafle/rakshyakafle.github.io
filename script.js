let c = document.getElementsByTagName('canvas')[0];
let ctx = c.getContext('2d');

let width = c.width;
let height = c.height;

function circle(t, r = 1, h, k) {
  return [h + r * Math.cos(t), k + r * Math.sin(t)];
}

let n = 16;
let N = 2 * n;
let r = 100;

let points = Array.from({ length: N }, () => [0.0, 0.0]);
let origin = [width / 2, height / 2];

ctx.fillRect(origin[0], origin[1], 1, 1);

for (let i = 0; i < N; i++) {
  let t = i * ((2 * Math.PI) / (N - 1));
  let p = circle(t, r, origin[0], origin[1]);
  points[i] = p;
  ctx.fillRect(p[0], p[1], 1, 1);
}

for (let i = 0; i < n; i++) {
  let from = points[i];
  let to = points[2 * i];
  
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}