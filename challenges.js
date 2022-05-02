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