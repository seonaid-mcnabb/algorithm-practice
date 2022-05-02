/** Helper function code */
function problemNumber(number) {
  const problem = "\n%cProblem %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

/*------------------
1)DETERMINING BIG O RUN TIMES
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


/*------------------
2)
------------------*/

problemNumber(2);

//Test cases or explanation