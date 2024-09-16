# TASKS

## Task 1
Write a program that reads lines from standard input until EOF and outputs the reverse of each line.
When running your code, press ctrl + d in the terminal after entering your input to signify the end of file (EOF).

Example:
Input:
abc 123
lorem ipsum
dolor sit amet
Output:
321 cba
muspi merol
tema tis rolod

## Task 2
You are tasked with writing a program that will tape files together in a tab separated format. Your program will accept multiple filenames through command line and it is required to open the files. If a file does not exist then then the program should not proceed to stitch any file contents together and the program should output:
Unable to load file <filename>
The program will be ran in this format:
node stickytape.js [<filename1>, <filename2>...]
You can assume you strictly stitch lines together and spaced by a tab ( \t )
If in the event that two files do now have the same amount of lines, a tab should be a placeholder where there is usually an entry.
Examples:
Example 1 Two Files
node sticktape.js cats.txt dogs.txt
Output:
Mainecoon   Labrador
Siamese BoarderCollie
Ginger  Staffy
Example 2 Three Files
node sticktape.js cats.txt dogs.txt birds.txt )
Output:
Mainecoon   Labrador    Pidgeon
Siamese BoarderCollie   Budgie
Ginger  Staffy  Bluejay
task2_resources.zip
 