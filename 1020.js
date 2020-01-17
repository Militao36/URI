const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

let dias = parseInt(lines[0]);
const anos = parseInt(dias / 365);
dias = dias % 365;

const meses = parseInt(dias / 30);
dias = dias % 30;

const dia = parseInt(dias / 1);
dias = dias % 1;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dia} dia(s)`);