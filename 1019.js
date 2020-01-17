const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

let duracao = parseInt(lines[0]);
const qtdHors = parseInt(duracao / 3600);
duracao = duracao % 3600;

const qtdMinutes = parseInt(duracao / 60);
duracao = duracao % 60;

const qtdSegundos = duracao;

console.log(`${qtdHors}:${qtdMinutes}:${qtdSegundos}`)
