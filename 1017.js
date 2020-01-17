const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const distancia = lines[0].toString();
const km = lines[1].toString();
const litros = ((distancia * km) / 12).toFixed(3);
console.log(litros)