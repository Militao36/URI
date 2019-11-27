const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const [x1, y1] = lines[0].toString().split(' ');
const [x2, y2] = lines[1].toString().split(' ');

const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log(distancia.toFixed(4));