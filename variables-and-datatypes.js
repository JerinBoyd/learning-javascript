// single line comment
/** 
 * This is a multi line comment
 */

//  Variables
var name = "Jeff";  // old school javascript (99% don't use this)
const fruit = "Banana"; // constant binding (lock it in)
let veggie = "Carrot"; // similar to var , but some other differences....
console.log("name: ", name); // print
console.log("fruit: ", fruit);
console.log("veggie: ", veggie);


// simple datta types
// Strings
const aString = "things and stuff";
//  a string => spaces and variable names are ..... BAD!!!!!
// so we remove the spaces and capitalize all words but the first 
// this is called camel casing THis is a CONVENTION!
const anotherString = 'some other things and stuff'; // this is single quotes
const stringWithNumbers = '1234.03'; // 
console.log ("aString: ", aString);
console.log ("anotherString: ", anotherString);
console.log ("stringWithNumbers: ", stringWithNumbers);

console.log('what is the type of aString? ', typeof aString);

// strings will come back up. There is more to know
// Numbers
const aNumber = 1;
const anotherNumber = 3.5;
console.log('aNumber: ', aNumber);
console.log('anotherNumber: ', anotherNumber);
console.log('type of aNumber: ', typeof aNumber);
console.log('Type of anotherNumber: ', typeof anotherNumber);

//not so simple data types and numbers will come back up
// arrays

const anArray = [1, 2, 3, 4];  // an array of numbers
const aStringArray = ['cheese', 'bacon', 'eggs']; // an array of strings
console.log('anArray: ', anArray);
console.log('aStringArray: ', aStringArray);
console.log('how many elements are in anArray ? ', anArray.length);
//  the "." after the anArray (the variable) accesses the property "length" of anArray
console.log('What is the type of anArray?', typeof anArray);

