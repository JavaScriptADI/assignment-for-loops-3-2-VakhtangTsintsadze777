// Assignment 3-2 

// 1 Write a for loop to print the numbers 1 through 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2 Write a for loop that prints the numbers 10 through 1.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3 Explain the code below. Write a comments to each line.

let sum = 0;  // creates variable
for (let i = 1; i <= 50; i++) {  // creating a loop that is truth until 'i' is equal to 50
    sum += i; // add the current value of 'i' to 'sum'
}
console.log(sum);

// 4 How many iterations are in the loop below? Explain.

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// here are 5 interations until 'i' becomes 10


// 5 What does the break statement do? Explain and give an example.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // exits loop when 'i' equals 5
    }
    console.log(i);
}

// 6 What does the continue statement do? Explain and give an example.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        continue; // skips odd numbers below 10
    }
    console.log(i);
}

// 7 Generate and print a random number between 1 adn 100 until you get the number 27;

let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
    console.log(randomNumber); // print the number
} while (randomNumber !== 27); // continue until the number is 27


// 8 Generate Random Password. HINT - Use ASCII codes to generate random characters

let a = 101;
let b = 132;
let password = '';
for (let i = 0; i < 20; i++) {
    const charCode = Math.floor((Math.random() * (b - a)) + a);
    const char = String.fromCharCode(charCode);
    password += char;
}
console.log(password);


// 9 "There is a man somewhere, Find him", Below code generates string with 2 possible characters, " " and "?". Write a code that will find the position of "?".

let str = "          ";
const questionMarkIndex = Math.floor(Math.random() * str.length);
str = str.substring(0, questionMarkIndex) + "?" + str.substring(questionMarkIndex + 1);

console.log(str);

for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
        console.log("Found a question mark at index", i);
        break;
    }
}


//  10 "Mystery Room", Write a code that will generate 2d representation of a room. you should generate an empty space, wall or a mystery box. You can use any characters you want. The room should be 10x10. The room should have 10 walls, 1 mystery boxes and the rest should be empty space, mystey box location should be random!. The room should look something like this:
// ##########
// #?       #
// #        #
// #        #
// #        #
// #        #
// #        #
// #        #
// #        #
// ##########

const roomSize = 10;
let room = Array(roomSize).fill().map(() => Array(roomSize).fill(' '));

// Set the walls
for (let i = 0; i < roomSize; i++) {
    room[0][i] = '#';
    room[roomSize - 1][i] = '#';
    room[i][0] = '#';
    room[i][roomSize - 1] = '#';
}

// Add 10 additional walls inside the room
let wallsPlaced = 0;
while (wallsPlaced < 10) {
    const row = Math.floor(Math.random() * (roomSize - 2)) + 1;
    const col = Math.floor(Math.random() * (roomSize - 2)) + 1;
    if (room[row][col] === ' ') {
        room[row][col] = '#';
        wallsPlaced++;
    }
}

// Add 1 mystery box
let mysteryBoxPlaced = false;
while (!mysteryBoxPlaced) {
    const row = Math.floor(Math.random() * (roomSize - 2)) + 1;
    const col = Math.floor(Math.random() * (roomSize - 2)) + 1;
    if (room[row][col] === ' ') {
        room[row][col] = '?';
        mysteryBoxPlaced = true;
    }
}

// Print the room
room.forEach(row => {
    console.log(row.join(''));
});
