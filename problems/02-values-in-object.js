/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
//Understand
  //function valuesInObject
    //accepts an object (obj)
  //returns an ARRAY of all values within that object

//Plan
  //for loop that runs as long as # of keys
    //assign key's values as a variable
    //push that variable into array
  //return array
// function valuesInObject(obj) {
//   let array = [];
//   for(let key in obj){
//     //let value = obj[key]
//     array.push(obj[key]);
//   }
//   return array;
//}

function valuesInObject(obj){
  return Object.values(obj)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
