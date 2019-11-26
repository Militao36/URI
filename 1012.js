const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const [A, B, C] = lines[0].split(' ');
const PI = 3.14159;

const a = (A * C) / 2;
const b = PI * Math.pow(C, 2);
const c = ((parseFloat(A) + parseFloat(B)) * C) / 2;
const d = Math.pow(B, 2);
const e = A * B;

console.log(`TRIANGULO: ${a.toFixed(3)}`);
console.log(`CIRCULO: ${b.toFixed(3)}`);
console.log(`TRAPEZIO: ${c.toFixed(3)}`);
console.log(`QUADRADO: ${d.toFixed(3)}`);
console.log(`RETANGULO: ${e.toFixed(3)}`);

