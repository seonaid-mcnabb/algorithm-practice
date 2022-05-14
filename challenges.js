/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

/*------------------
1)SECTION 1 DETERMINING BIG O RUN TIMES
------------------*/

//Determine the run-time of the following functions
problemNumber(1);
let sumProduct = (array) => {
  let sum = 0;
  let product = 1;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for(let i = 0; i < array.length; i++) {
    product *= array[i];
  }  
  console.log(sum + ", " + product);
}

//Test cases:
  sumProduct([1,2,3]); //expect 6,6


//Run-time is O(N) --> originally O(n+n) but can be simplified as O(N)
//Why, even though there are two loops?
//Because no matter what, run time increase will be constant


problemNumber(2);
let printPairs = (array) => {
  for(let i =0; i<array.length; i++) { //outer loop initializes at 0 and runs until end of array
    for(let j=0; j<array.length; j++) { //inner loop initializes at 0 and runs until end of array
      console.log(array[i] + "," + array[j]); //in an array of 3, inner runs 3 times before returning to outer loop
      //in case of [3,5,6] -- ARRAY[I] will be 3 until inner loop finishes running through the array, so array [j] increases on each iteration
      //once inner loop reaches end, we return to outer
      //and then on second iteration, outer increases array[i] iteration 2 is 5, then runs through same iterations of 3 items 
      //outer loop stops when end of array is reached
    }
  }
}

printPairs([3,5,6]) //expect 3,3, - 3,5 - 3, 6 - 5,3 - 5, 5 - 5, 6 - 6, 3 - 6,5 - 6, 6

//Run time is O(N2) as in n/squared
//the inner loop in this case has O(n) iterations and it is called N times -- hence n squared
//it iterates 3 times... and is called 3 times in the above example

problemNumber(3);
let printUnorderedPairs = (array) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = i+1; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

printUnorderedPairs([3,5,6]) //expect [3, 5] - [3,6] - [5,6]

//run time
//inner loop: the first time it runs for n - 1 step, second time it runs for n - 2, third time runs for n - 3
//Big o run time is O(n2) (squared)
//outer loop will always run n times
//inner loop will average n / 2 work on average and is run n times, so total work is nsquared / 2, which is O(n2)

problemNumber(4);
let printUnorderedPairs2 = (array1, array2) => {
  for(let i = 0; i < array1.length; i++) { //will run until the end of array1 (array of 5, 5 times)
    for(let j = 0; j < array2.length; j++) { //will run b times (array of 5, 5 times, pj) x n of array 1
      if(array1[i] < array2[j]) { //if the number of array 1 is less than the number from array 2
        console.log(array1[i] + ", " + array2[j]); //console log the pair
      }
    }
  }
}

printUnorderedPairs2([5,6,10,11,15], [10, 2, 3, 8, 7]) //expect [5, 10] - [5, 8] - [5, 7], [6, 10] - [6, 8] - [6,7]
//run time explanation
//the if statement in the inner loop runs O(1) time because it's constant
//for every element in array1, array2 goes through b iterations where b is array2.length
//if we say a is array1.length, then run/time for this algorithm is O(ab)

problemNumber(5);
let printUnorderedPairs3 = (array1, array2) => {
for(let i = 0; i < array1.length; i++) { //outer loop runs a times where a = array1.length
  for(let j = 0; j < array2.length; j++) { //inner loop will run b times where b = array2.length x a
    for(let k = 0; k < 100000; k++) { //inner inner loop will run 100000 times regardless, making it O(1)
      console.log(array1[i] + "," + array2[j]);
      }
    }
  }
}

console.log("Not logging results of test here as too long")

//the runtime for this algorithm is O(ab) because the inner inner loop is constant O(1) ... and the rest of the code
//is the same as the previous function.. making runtime O(ab)

problemNumber(6);
//this code should reverse an array
let reverseArray = (array) => {
  for(let i=0; i < array.length / 2; i++) { //initalize at 0 and run until i is less than the length of the array divided by 2, add 1 at each iteration
    let other = array.length - i - 1; //assign other variable to the length of the array, minus i, minus 1 . ie in array of 3 would be; 3 - 0 - 1, aka 2
    let temp = array[i]; //make temp variable that is array[i], in this case 0
    array[i] = array[other]; //assign the value of array[2] to array[0]
    array[other] = temp; //assign value of array[0] to array[2] 
  }
  console.log(array);
}

reverseArray([3,2,1]); //expect 1,2,3

problemNumber(7);
/*
An algo that takes in an array of strings then
-sorts each string
-sorts full array
--what's runtime?

Step 1: define variables involved
-s = length of longest string
-a = length of the array

Step 2: work through steps
-To sort a string runtime is O(s log s)
-This must be done for every string (there are a strings) - so (O a*s log s)

Step 3:
-all strings must be sorted
-you must compare and sort
--every string comparison takes O(s) time and there are O(a log a) comparisons to make
--so this step will take O(a *s log a) time

Step 4: combine parts
-combining, final runtime for this algorithm will be O(a*s(log a + log s))
*/

problemNumber(8);
let isPrime = (number) => { //takes number as input
  for(let x = 2; x * x <= n; x++) {//initalizes x at 2, runs while x * x is less than input number, adding 1 at each iteration
    if (n % x === 0) { //if number is divisble by x (up to the square root of n), not prime
      return false;
    }
  }
  return true; //else true
}

//run time is O(squareRootN)/
//why? for loop work is constant --so in worst case how many loops does it go through?
//square root of N loops

problemNumber(9);
