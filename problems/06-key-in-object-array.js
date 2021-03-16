/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
//Understand
  //function named keyInObjectArray
    //accepts an array (objArray) and a string (keyString)
  //return true if any of the objects contains the keyString
  //return false if none contain keyString

//Plan
  //for loop to run until objArray.length
    //have access to objects
function keyInObjectArray(objArray, keyString) {
  let found = false;
  objArray.forEach(function(obj){
  //for(i = 0; i < objArray.length; i++){
    if (obj[keyString] !== undefined) {
      found = true;
    }
      // if(keyString in objArray[i]){
      //   return true;
      // }
      // else{return false;}

  });
  return found;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
