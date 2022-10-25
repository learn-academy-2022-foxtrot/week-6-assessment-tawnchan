// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("about", () => {
  it(
    "returns an array with a sentence about each person with their name capitalized",
    () => {
      expect(about(people)).toEqual([
        "Ford Prefect is a hitchhiker.",
        "Zaphod Beeblebrox is president of the galaxy.",
        "Arthur Dent is a radio employee."
      ]);
    });
});


// ReferenceError: about is not defined, This is a good error.... now we just have to build out the function to make this test pass.

// b) Create the function that makes the test pass.

// Since the first character of each element of the object array needs to be capitalized.. and theNNNn...
// We need to iterate through each element and pull the first character of the name key and capitalize it... and theNNNn
// We can do this by using .map() to iterate through each element and push the name key into a new array.
// thenNn.. I need to figure out two split up the keys from their values.. and theNnn.. there is the .split()
// what we'll do is once they're split we will map through the elements in the new array, 
// access charAt(0) attached .toUpperCase and since it capitalized all the characters, we will use .slice(1)
// on each element to separate the at index 1 of the element so isolate the first capitalized character
// we then use .join() to join back the name element
// finally we string interpolation to form the sentence using the key value pairs: name and occupation
// and return the new array of sentences. 

const about = (people) => {
  let sentence = people.map((person) => {
    const namesArray = person.name.split(" ");
    const names = namesArray
      .map((element) => {
        return (element = element.charAt(0).toUpperCase() + element.slice(1));
      })
      .join(" ");
    return `${names} is ${person.occupation}.`;
  });
  return sentence;
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.157 s
// Ran all test suites.
// ✨  Done in 0.55s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

describe("remainingNumbers", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainingNumbers(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainingNumbers(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// ReferenceError: remainingNumbers is not defined, good fail, lets make a function to make this test passsssssss....

// b) Create the function that makes the test pass.

// b) Create the function that makes the test pass.
// we need a function that takes in an array and checks for division by three
// first thing we need to do is filter out all of the non-number elements. We can use filter method
// once we have the arrays with just numbers, we can chain .map method and divide each number using mod operator
// resulting array will have division by 3 remainders as elements

// First thing is first.. we have to figure out how to select only the numbers of the mixed data array.
// We'll use filter() on the elements and select using type() we will select the elements that are strictly
// equal to 'number' followed by a map(elements) to return the new array of numbers divided by 3.

const remainingNumbers = (array) =>
  array.filter((elements) => 
  typeof elements === 'number')
  .map((elements) => elements % 3);

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.19 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.97s.


// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // a) Create a test with an expect statement using the variables provided.


// The instructions ar e confusing... the output is 99.. but the instructions asked for the SUM of ALL the numbers... cubed. This means that you have to add the numbers in teh array first and then cube it... you know what i mean? so the output shouldn't 99 or 

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubed(cubeAndSum1)).toEqual(99);
    expect(cubed(cubeAndSum2)).toEqual(1125);
  });
});

// ReferenceError: cubed is not defined... lets define it theNNnNn...

// b) Create the function that makes the test pass.

// Since we have an array of numbers where we have to do something to each element,
// can iterate through each element of the array using .map() and cubing each element,
// which is element to the third power... we use **.
// After cubing each element, we have to then add the new total of each element
// which was created with the .map() function.
// We can use .reduce() to add the totals of the element in the array. 

const cubed = (array) => array.map((element) => element ** 3).reduce((b, a) => b + a);

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.192 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.68s.