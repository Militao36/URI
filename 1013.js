const input = require('fs').readFileSync('./index.txt', 'utf8');
const lines = input.split('\n');

const valor = lines[0].toString();

let val = 0;

for (const iterator of valor.split(' ')) {
    if (val < parseInt(iterator)) {
        val = iterator;
    }
}

console.log(`${val} eh o maior`);