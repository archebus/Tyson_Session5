// ## Task 1
// Write a program that reads lines from standard input until EOF and outputs the reverse of each line.
// When running your code, press ctrl + d in the terminal after entering your input to signify the end of file (EOF).

// Example:
// Input:
// abc 123
// lorem ipsum
// dolor sit amet
// Output:
// 321 cba
// muspi merol
// tema tis rolod

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
    console.log(input.split("").reverse().join(""));
});