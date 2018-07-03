// CODING CHALLENGE 2

/*
1. Create an array with some years where persons where born.
2. Create an empty array (just []).
3. Use a loop to fill the array with the ages of the persons.
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age.
5. Finally, create a function called printFullAge which receives the vector of years as an argument, executes the steps 2., 3., and 4., and returns a vector of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years).
6. Call the function with two different vectors and store the results in two variables: full_1 and full_2.

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: You can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

let born = [1953, 1987, 2007, 1931, 1993, 2008, 1989, 2016];

function printFullAge(born) {
  let age = [];
  let output = [];

  const today = new Date();
  const year = today.getFullYear();

  for(let i=0; i<born.length; i++) {
    age.push(year - born[i]);
  }

  for(let i=0; i<age.length; i++) {
    if(age[i] >= 18) {
      console.log("Person " + (i + 1) + " is " + age[i] + " years old, and is of full age.");
      output.push(true);
    } else if (age[i] < 18) {
      console.log("Person " + (i + 1) + " is " + age[i] + " years old, and is not of full age.");
      output.push(false);
    }
  }

  console.log(output);
  return output;
}

// printFullAge(born);

let full_1 = printFullAge(born);
let full_2 = printFullAge([1945, 1999, 2016]);