const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

// X = velocidade de 60km/h
// Y = velocidade de 90km/h

//Em 60min o carro Y distancia 30 km do carro X = 2km a cada 2 minutos

const km = lines[0].toString();
const min = km * 2;
console.log(`${min} minutos`);