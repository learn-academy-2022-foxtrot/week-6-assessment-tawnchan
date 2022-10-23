
const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

function about(array)  {
array.forEach(function(name, occupation) {
    return (`${name} is ${occupation}`)
});
}

console.log(about(people));