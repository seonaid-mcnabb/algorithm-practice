/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

/*------------------
1)
Create a function named
"forEach" that takes in two
parameters– an array and a
callback function. 

The "forEach" function should
apply the function to every
element in the array.


------------------*/

//test
problemNumber(1);

let forEach = (arr, cb) => {
  for (let value of arr) cb(value);
};

//Test cases:
forEach(["a", "b", "c"], (e) => {
  console.log(e);
}); // a b c

//EXCELLENT

/*------------------
2)
Create a function named
"map" that takes in two
parameters– an array and a
callback function. 

The "map" function should
return a new array. Each item
in the new array should be the
result of applying the callback
function to every element
of the array passed in as the parameter.
------------------*/

problemNumber(2);

//STEPS:
//create empty array to store result
//loop through array
//add each element to the result array, applying function (cb) to each element

let map = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};

//PERFECT
//Test cases:
console.log(map([5, 6, 7], (e) => e * 2)); // [10, 12, 14]

/*------------------
3)
Create a function named
"filter" that takes in two
parameters– an array and a
callback function. 

The "filter" function should
return a new array that only includes
the items that have passed
the callback function (ie: the callback
will return true or false for each item).

------------------*/
problemNumber(3);

//STEPS:
//Create empty array to store results
//Add for loop to loop through array
//Add if statement
//In statement: if CB function applied to value evaluates to true...
//Push value (which meets true condition) to results array
//Leave loop and return new result array

const filter = (arr, cb) => {
  let result = [];
  for (value of arr) {
    if (cb(value)) { //Simpler way to write the same thing you had :) 
      result.push(value);
    }
  }
  return result;
};

//Test cases:
console.log(filter([5, 6, 7, 8], (e) => (e % 2 === 0 ? true : false))); // [6, 8]

/*------------------
4)
Create a function named
"every" that takes in two
parameters– an array and a
callback function. 

The "every" function is similar to
"filter" in that the callback function
is a test. However, the "every" function
returns true if EVERY element
in the passed in array passes that test. 
Otherwise, it returns false. Try writing it!


------------------*/
problemNumber(4);

//STEPS:
//No result array needed because return should just be true or false
//Start a for loop to loop through array
//Add an if statement
//If the result of cb applied to value is false
//Return false
//Else (outside of loop): return true

let every = (array, cb) => {
  for (value of array) {
    if (!cb(value)) { //Simpler way to write the same thing you had :) 
      return false;
    }
  }
  return true;
};

//Test cases:
console.log(every([1, 3, 5], (n) => n < 6)); // true
console.log(every([2, 4, 6], (n) => n < 6)); // false
console.log(every([2, 4, 6, 2], (n) => n < 6)); // false

/*------------------
5)
You've written "forEach", "map", "filter"
and "every" from scratch. Each of 
these methods exist on the JavaScript Array
prototype already, however. 

For this question, use the native
forEach method to add all of the items
in the nums array. Use a fat arrow function.
The code has been started for you.
------------------*/

//STEPS
//Apply forEach function to nums array, with e as paramenter (e is element)
//At each iteration, add element to sum variable (and previous result)
//Sum = 36

problemNumber(5);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

nums.forEach((e) => {
  return sum += e;
});

console.log(sum);

/*------------------
6.1)
Use the native map method to transform
every item in the names array to a greeting.

Test case:
["Sofia", "Pedro", "Mia"] to ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
------------------*/
problemNumber(6);

//STEPS
//Let greetings variable = names, with map function called on it
//Function: for each element, return Hello, element!
//New array displays greetings

const names = ["Sofia", "Pedro", "Mia"];

let greetings = names.map((e) => {
  return `Hello, ${e}!`;
});

console.log(greetings);

/*------------------
6.2)
Use the map method to create a duplicate of an array.
Write this in the shorter possible way you can.


------------------*/
//STEPS
//Map function goes through elements
//Returns same elements in new duplicate array

const langs = ["JavaScript", "Python", "Go"];

const duplicate = langs.map(e => e); //Simpler way to write the same thing you had :) 

console.log(duplicate);

//Test case:
//["JavaScript", "Python", "Go"] to ["JavaScript", "Python", "Go"]

/*------------------
6.3)
Use the map method to create a duplicate of an array of full names.

Test case:
Result should be ["Grace Hopper", "Ruth Bader Ginsburg", "Ada Lovelace"]
------------------*/

//STEPS
//Map function runs through elements
//As elements are objects, use dot notation to return new array with firstname and lastname

const people = [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
];

const fullNames = people.map((e) => {
  return `${e.firstname} ${e.lastname}`;
});

console.log(fullNames);

/*------------------
6.4)
Use the map method to create a duplicate of objects that contain the original data plus the fullname.
Use the same people array as in the previous exercise

Test case:
Result should be [
  { firstname: "Grace", lastname: "Hopper", fullname: "Grace Hopper" },
  {
    firstname: "Ruth",
    lastname: "Bader Ginsburg",
    fullname: "Ruth Bader Ginsburg",
  },
  { firstname: "Ada", lastname: "Lovelace", fullname: "Ada Lovelace" },
]
------------------*/

//STEPS
//Map function gets into elements (e)
//Add key value pair to each object (e) using dot notation
//fullname(key) = code from previous problem to show full names

const fullObjects = people.map((e) => {
  e.fullname = `${e.firstname} ${e.lastname}`;
  return e;
});

console.log(fullObjects); //That's excellent! Better than what I had. You can take over the teaching, I was fun byeee

/*------------------
6.5)
Use the map function to create an array with values "true" or "false" 
that indicate if the number in that position is even

Test case:
[3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9] to [false, false, true, false, true, false, true, false, true, true, true, false]

------------------*/

//STEPS
//Map function evaluates each element of number array
//IF statement; if element % 2 returns o, return true
//Else: return false

const numbers = [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9];

const areEven = numbers.map((e) => {
  return e % 2 === 0 //Simpler way to write what you had
});

console.log(areEven);

/*------------------
6.6)
Use the map function to create an array with values "true" or "false" 
that indicate if the number in that position is equal to the position in the array (starting at 0)

Test case:
[1,3,2,2,4,13,8,6,8,10,4,12,12] to [false, false, true, false, true, false, false, false, true, false, false, false, true]

------------------*/

//STEPS
//Map function runs through elements of moreNumbers array
//Add two parameters (e- element, and index)
//If statement
//If e (number) is equal to index
//Return true
//Else
//Return false

const moreNumbers = [1, 3, 2, 2, 4, 13, 8, 6, 8, 10, 4, 12, 12];

const areInPosition = moreNumbers.map((e, index) => {
  return e === index; //Simpler way to write what you had
});

console.log(areInPosition);

/*------------------
7.1)
Use the filter method to filter out any
number that is greater than 50.

Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 34, 3, 24]
------------------*/
problemNumber(7);

//STEPS
//Apply filter function to numList
//Return any number that is less than 50 (effectively filtering out numbers over 50)

const numsList = [1, 34, 83, 65, 3, 24, 98];

const smallNums = numsList.filter(e => {
  return e < 50;
});

console.log(smallNums);

/*------------------
7.2)
Use the filter method to filter out any
number that is even. Use the same array as before, numList

Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 83, 65, 3]
------------------*/
//STEPS
//Apply filter function to numsList
//Return array of any number whose modulo2 result is greater than or equal to 1

const evenList = numsList.filter((e) => {
  return e % 2 === 1; //It'll always be 0 or 1, right? 
});

console.log(evenList);

/*------------------
7.3)
Use the filter method to keep all the numbers that are bigger
than the position they occupy in the array, starting at 0

Test case:
[1, 0, 1, 3, 5, 6, 6, 1, 9] to [1, 5, 6, 9]
------------------*/

//STEPS
//Apply filter function to moreNums
//Use two parameters (e, and index)
//Return only those values (e) that are greater than the index

const moreNums = [1, 0, 1, 3, 5, 6, 6, 1, 9];

const biggerThanList = moreNums.filter((e, index) => {
  return e > index; //woop woop, awesome research
});

console.log(biggerThanList);

/*------------------
7.4)
Use the filter method to filter out the people whose firstname
does not contain the letter "a". Use the array "people" that you used before.

Test case:
[
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
]
 to 
 [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ada", lastname: "Lovelace" },
]
------------------*/
//STEPS
//Apply filter function to people array
//Apply includes function to e.firstname(parameter: letter a) & return only those results

const peopleWithA = people.filter((e) => {
  return e.firstname.includes("a"); //yassss
});

console.log(peopleWithA);

/*------------------
8)
Use the every method to return true
if every word in the array below is a
palindrome (the same backwards as forwards).

Here's some code you can use to reverse
a string: 

.split('').reverse().join('')

Notice that the code that has been given
to you is wrapped in another function. This is to
make testing multiple cases easier. :)

Test case:
["deified", "civic", "radar", "level", "rotor"] is true
["kayak", "reviver", "racecar", "reader", "madam"] is false
------------------*/
problemNumber(8);
//STEPS
//Apply every function to list parameter of checkPalindromes function
//Add parameter to every function (word)
//Return test true if:
//Word element is equal to the word element
//split (into indvidual array element)
//then reversed
//then joined together into a string again

const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function checkPalindromes(list) {
  return list.every((word) => {
    return word === word.split("").reverse().join(""); //yasssss
  });
}

console.log(checkPalindromes(wordList1));
console.log(checkPalindromes(wordList2));

/*------------------
9)
Look at the MDN docs and Eloquent JavaScript
to understand how "reduce" works. Then, 
use reduce to add all the items in the 
numsList (from the previous question) together.
------------------*/
problemNumber(9);

const total = numsList.reduce((a, b) => {
  return a + b;
});

console.log(total); // should equal 308 /wwwooopp

// TO DEEPEN THE LEARNING

/*------------------
10)
Use the filter method to create an array containing
only those numbers that are even and are located in an even position in the array,
or those numbers that are odd and are located in an odd poistion in the array,
starting at position 0

Test case:
[1, 34, 83, 65, 3, 24, 98] to [65,98]
------------------*/

problemNumber(10);

//STEPS
//Apply filter function to numsList
//Add parameters: e (number) and index
//Add filter conditions:
//1. those elements whose index and value both return value greater than or equal to 1 after modulo 2
//2. those elements whose index and value both return 0 after modulo 2

const oddList = numsList.filter((e, index) => {
  return (e % 2 === 1 && index % 2 === 1) + (e % 2 === 0 && index % 2 === 0); //woop, same it's always 0 or 1 right?
});

console.log(oddList);

/*------------------
11.1)
Each array in this array represents each player's age in a basketball team
Filter out those teams that have less than 3 players that are older than 20 years old.
Hint: you can use HOFs inside the callbacks of other HOFs.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
to [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]
------------------*/
problemNumber(11);
//STEPS
//1. Filter basketball teams by elements 
//2. Filter elements with age as parameter, age > 20 as  case
//3. If arrays that meet > 20 parameter are longer than 2 elements, return original arrays
//I don't actually fully understand how this one is working - and yet you're getting it all right haha. I'll break it down in the review.

let basketballTeams = [
  [20, 31, 19, 18, 22],
  [20, 31, 16, 21, 21],
  [17, 31, 16, 21, 21],
  [18, 19, 19, 20, 32],
];


let olderTeams = basketballTeams.filter((e) => e.filter((age) => age > 20).length > 2);

console.log(olderTeams);


/*------------------
11.2) Perhaps you used the .length property in the previous exercise.
Can you repeat the exercise without using .length?
You're only allowed to use HOFs, but you can use as many as you need.

------------------*/

// olderTeams = // your code here

// console.log(olderTeams);

/*------------------
11.3) This time, instead of returning the arrays of teams,
calculate the total age of the team (adding all the ages of its players).
In other words, create an array that contains the accumulated age of team players,
only for those teams that have more than 2 players that are older than 20.
You're only allowed to use HOFs, but you can use as many as you need.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
to [109,106]

------------------*/

// olderTeams = // your code here

// console.log(olderTeams);
