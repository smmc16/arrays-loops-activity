/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */

let groupHobbies = ['guitar', 'reading', 'video games', 'biking'];
for (let hobby of groupHobbies) {
     console.log(hobby);
}
console.log('Total hobbies:', groupHobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ['blue', 'green', 'pink', 'teal', 'teal']
let tealCount = 0;
for (let color of colors ){
     if (color === 'teal'){
          tealCount++;
     } 
}
console.log(colors);
console.log('Number of times teal was found:', tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numbers = [1, 2, 3, 4, 5];
let oddNumbers = [];
let evenNumbers = []; 
for (let number of numbers) {
     if (number % 2) {
          oddNumbers.push(number)
     } else {
          evenNumbers.push(number)
     }
}
console.log(numbers);
 console.log(evenNumbers);
 console.log(oddNumbers);

      


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false

let booleans = [true, false, true, true, false];
let toggled = [];
for (let boolean of booleans) {
     if (boolean === true) {
          toggled.push(false);
     } else {
          toggled.push(true);
     }
}
console.log(booleans);
console.log(toggled);

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let numbersArray = [1, 3, 6, 0, 2, 4, 0, 0];
console.log(numbersArray);
while (numbersArray[numbersArray.length - 1] === 0) {
     numbersArray.pop();
}
console.log(numbersArray);

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3

let largeArray = [3, 6, 8, 2, 4, 9, 10, 14, 12, -1]
let high = 0;
let low = 0;

for(let number of largeArray) {
     if ( number > high ) {
          high = number;
     } else if (number < low){
          low = number; 
     }
     
}

console.log(high);
console.log(low);


