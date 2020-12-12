const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream('../input')
})


const numbers = [];

rl.on('line', (l) => {
    const number = parseInt(l, 10);
    const answer = numbers
        .reduce((acc, n) => !acc ? numbers.reduce((acc, sn) => (n + sn + number) === 2020 ? n * sn * number : acc, 0) : acc, 0)
    if (answer) {
        console.log(answer);
        rl.close();
    }
    numbers.push(number);
})