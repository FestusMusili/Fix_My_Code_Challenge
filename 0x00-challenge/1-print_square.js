#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

let size;
if (process.argv.length <= 2) {
    size = 10;
} else { 
    size = parseInt(process.argv[2], 10);
    if (isNaN(size) || size <= 0) {
        process.stderr.write("Invalid size argument\n");
        process.stderr.write("Usage: ./1-print_square.js <size>\n");
        process.stderr.write("Example: ./1-print_square.js 8\n");
        process.exit(1);
    }
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}