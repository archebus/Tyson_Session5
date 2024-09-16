// ## Task 2
// You are tasked with writing a program that will tape files together in a tab separated format. Your program will accept multiple filenames through command line and it is required to open the files. If a file does not exist then then the program should not proceed to stitch any file contents together and the program should output:
// Unable to load file <filename>
// The program will be ran in this format:
// node stickytape.js [<filename1>, <filename2>...]
// You can assume you strictly stitch lines together and spaced by a tab ( \t )
// If in the event that two files do not have the same amount of lines, a tab should be a placeholder where there is usually an entry.
// Examples:
// Example 1 Two Files
// node sticktape.js cats.txt dogs.txt
// Output:
// Mainecoon   Labrador
// Siamese BoarderCollie
// Ginger  Staffy
// Example 2 Three Files
// node sticktape.js cats.txt dogs.txt birds.txt )
// Output:
// Mainecoon   Labrador    Pidgeon
// Siamese BoarderCollie   Budgie
// Ginger  Staffy  Bluejay
//
// task2_resources.zip

const fs = require('fs').promises;
const files = process.argv.slice(2);

async function stitchFilesTogether(files) {
    try {
        // Read contents
        const fileContents = await Promise.all(files.map(file => fs.readFile(file, 'utf8')));

        // Split each file's contents be line in array.
        const linesArray = fileContents.map(content => content.split('\n').map(line => line.trim()));

        // Fine the max lines.
        const maxLines = Math.max(...linesArray.map(lines => lines.length));

        // Stitch lines together using ('\t') separator
        for (let i = 0; i < maxLines; i++) {
            const stitchedLine = linesArray.map(lines => lines[i] || '').join('\t');
            console.log(stitchedLine);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

stitchFilesTogether(files);