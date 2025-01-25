// Question 1:
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let diff = ages[ages.length - 1] - ages[0];
console.log("1. Difference is:", diff);

ages.push(45);

diff = ages[ages.length - 1] - ages[0];
console.log("New Difference is:", diff);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average age:", average);

// Question 2:
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("2. Average number of letters per name:", averageLetters);

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + (i < names.length - 1 ? " " : "");
}
console.log("Concatenated names:", concatenatedNames);

// Question 3: How do you access the last element of any array?

let lastElement = names[names.length - 1];
console.log("3. Last Element:", lastElement);

// Question 4: How do you access the first element of any array?
let firstElement = names[0];
console.log("4. First Element:", firstElement);

//Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let id = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let idLengths = [];

for (let i = 0; i < id.length; i++) {
  idLengths.push(id[i].length);
}

console.log("5. ID length:", idLengths);

// Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let nameLengths = [3, 5, 3, 5, 4, 3];
let total = 0;

for (let i = 0; i < nameLengths.length; i++) {
  total += nameLengths[i];
}

console.log("6. Sum of all the element:", total);

// Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log("7. Repeated word:", repeatWord("Hello", 3));

// Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("8. Full Name:", getFullName("Sangam", "Pangeni"));

// Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}

// Example:
console.log("9. Sum > than 100 ? ", isSumGreaterThan100([10, 20, 30, 40, 5])); //sum = 105
console.log("Sum > than 100 ? ", isSumGreaterThan100([50, 30, 10])); //sum = 90

// Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Example:
console.log("10. The Average: ", calculateAverage([10, 20, 30, 40]));

// Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isFirstAverageGreaterThanSecond(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  let avg1 = sum1 / arr1.length;
  let avg2 = sum2 / arr2.length;

  return avg1 > avg2;
}

// Example usage:
console.log(
  "11. 1st Avg. > 2nd Avg. ? ",
  isFirstAverageGreaterThanSecond([10, 20, 30], [5, 15, 25])
); // first average = 20, second average = 15
console.log(
  "1st Avg. > 2nd Avg. ? ",
  isFirstAverageGreaterThanSecond([5, 10], [15, 20])
); // first average = 7.5, second average = 17.5

// Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}

// Example usage:
console.log("12. Hot outside & Money in Pocket? ", willBuyDrink(true, 15));
console.log("Hot outside & Money in Pocket? ", willBuyDrink(false, 20));

//Question 13:  Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function isEven(num) {
  return num % 2 === 0;
}
console.log("13. Is Number Even? ", isEven(10));
console.log(" Is Number Even? ", isEven(21));
