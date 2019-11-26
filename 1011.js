const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const raio = lines[0].toString();
const pi = 3.14159;
const formula = (4.0 / 3) * pi * Math.pow(parseInt(raio), 3);
console.log(`VOLUME = ${formula.toFixed(3)}`)