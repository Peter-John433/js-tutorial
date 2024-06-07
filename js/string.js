//variables is a container for storing our values.
//variabls can be fixed or variable, fixed also known as literals and variables also known as vaiables.
// two most important variables literals are strings and numbers 


// STRING


//string is use for storing text
// string can be single quote, double qoute or template string(backticks).
// both single and double string do same work 
// quote in qoute: string are only allow in each other only if the inside quote does not corespond with the quotes surrounding them
// best way to break a js statement is after an operator 
// best way to break a js string is after an addition operator 
// template string also known as backtick are sorrounded with backtick and allow the following
// 1. allow single quote inside it 
// 2. allow double quote inside it 
// 3. allow multiline  

let myString = 'hello world'; // single quote
let myString1 = "hello john manson"; // double quote
let myString2 = `hello jennifer lopez`; // template string
console.log( myString );
console.log( myString1 );
console.log( myString2 );

// breaking a string

let myString4 =
 'Hey, john is this where you live?'; // after an operator
 console.log( myString4 );

let myString5 = 'are you there ' + 
'right now ?';  // after an addiction operator
console.log( myString5 );

// using escape characters 

let myString6 = 'i don\'t want to be among you squad any longer'; 
console.log( myString6 ); // single quote backslash 

let myString7 = 'i refuse to go \"opps\"';
console.log( myString7 );

//other  esscape characters includes: \n, \r, \t, \b etc.


// STRING METHODS
