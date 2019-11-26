const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const peca1 = lines[0].toString();
const peca2 = lines[1].toString();

const [cod1, num1, vl1] = peca1.split(' ');
const [cod2, num2, vl2] = peca2.split(' ');

const valor1 = (parseInt(num1) * parseFloat(vl1));
const valor2 = (parseInt(num2) * parseFloat(vl2));

console.log(`VALOR A PAGAR: R$ ${(valor1 + valor2).toFixed(2)}`);




