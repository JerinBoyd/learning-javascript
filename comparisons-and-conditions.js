// comparison 
// things that we compare must be comparable
// comparable means that I can use the following operators: <, <=, >, >=, ===, !== (full disclosure,  there are more but sometimes
// they cause problems at the beginnning)
const aString = 'abc';
const anotherString = 'abcd';
const aNumber = 123;
const anotherNumber = 123.2;

console.log('aString === anotherString: ', aString === anotherString);
console.log('aString > anotherString: ', aString > anotherString); 
console.log('aString >= anotherString: ', aString >= anotherString);
console.log('aString < anotherString: ', aString < anotherString);
console.log('aString <== anotherString: ', aString <= anotherString);
console.log('aString !== anotherString: ', aString !== anotherString);

console.log('aNumber === anotherNumber: ', aNumber === anotherNumber);
console.log('aNumber > anotherNumber', aNumber > anotherNumber); 
console.log('aNumber >= anotherNumber: ', aNumber >= anotherNumber);
console.log('aNumber < anotherNumber: ', aNumber < anotherNumber);
console.log('aNumber <== anotherNumber: ', aNumber <= anotherNumber);
console.log('aNumber !== anotherNumber: ', aNumber !== anotherNumber);

// conditional statements
// if -> using it to run code based on the answer to a question
// if-else => use it to run code based on the answer to a question 
       // but these are a fallback plan (the else)
// if-elseif-else -> i have multiple questions that determine what code to run

// NOTE; There is another way called a 'switch' but it runs differently

// 'if' 
if(3 === 3){
    console.log('Orange crush is delicious!');
}

if('a' === 'b'){
    console.log('this will never print');
}

//if-else
if('grape' === 'banana'){
    console.log('this is never going to run');
} else{
    console.log('this is a backup plan');
}

//if-elseif-else
const someNumber = 100;
if(someNumber !== 100){
  console.log('it is 100');
} else if(someNumber === 42){
    console.log('the meaining of life');
} else {
    console.log('none of the others worked');
}