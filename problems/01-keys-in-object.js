/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/
//Understand
  //function
    //accepts object
  //return an ARRAy of all KEYS within obj
//Plan
  //let
// function keysInObject(obj) {
//   let array = []
//   for(let key in obj){
//     array.push(key)

//   }
//   return array;
// }

function keysInObject(obj){
  return Object.keys(obj);
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
