const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const distancia = lines[0].toString();
const totalCombustivel = lines[1].toString();

console.log(`${(distancia / totalCombustivel).toFixed(3)} km/l`);