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

describe("about", (array) => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(about(array)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: about is not defined, This is a good error.... now we just have to build out the function to make this test pass.

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// b) Create the function that makes the test pass.

// For whatever odd reason, I have decided to declare our function with a function declaration instead of a const, let, or var. Why? Who knows? If it works.. it works.. if it breaks.. then it's a learning opportunity, yeah? But, from what I understand, those differences are very specific in occasion, such as for function hoisting; which is where we can call on the function first without first having to build the method/logic of the function.  

// Keep in mind that when declaring with a function declaration there is no arrow function, the structure is a little different than if we had declared it with a const, for example; in which case we then would have to use arrow functions.

// I'm not sure yet how I am going to write this code up, but here is my logic:
// our function 'about' will take in an array of objects.
// We then pass in a higher order function to iterate through the array and do something to each object, in this case it would be an array of sentences about each person with their names capitalized.
// I am thinking we should do a .forEach do method on each object. And, we pass on a return of a sentence with the key and values printed in it along with a .toUpperCase method on each name: value.

// I'm just not sure about the syntax though.. I can't remember off the top of my head.. but, lets figure it out. 

function about(array) {
  array.forEach(function(value){
    
  }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
