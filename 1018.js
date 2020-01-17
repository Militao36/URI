const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

let valor = parseFloat(lines[0]);
console.log(valor);

const cedulas = [100, 50, 20, 10, 5, 2, 1];
const valores = cedulas.map(e => {
    let aux = parseInt((valor / e));
    valor = valor - (aux * e);
    return `${aux} nota(s) de R$ ${e},00`;
});

valores.forEach(e => {
    console.log(e)
})