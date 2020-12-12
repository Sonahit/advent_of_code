const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream('../input')
})


const numbers = [];

rl.on('line', (l) => {
    const number = parseInt(l, 10);
    const luckyNumber = numbers.find(n => (n + number) === 2020);
    if (luckyNumber) {
        console.log(number * luckyNumber);
        rl.close();
    }
    numbers.push(number);
})