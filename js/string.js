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

//string length 
//this check the length of the string
let yoyo = 'bringmebackhome';
let yoyo1 = yoyo.length; 
console.log( yoyo1 );

// there are four methods for extracting string character this includes:
// 1. at()
// 2. charAt() 
// 3. charCodeAt() 
// 4. property access []

let myName = 'hello world';
let myName1 = myName.charAt(0); //charAt() method
 myName1 = myName.charCodeAt(0); // charCodeAt() method
 myName1 = myName.at() // at() method
 myName1 = myName[0] // property access
console.log( myName.length ); // length property
console.log( myName1 );

// there are three methods for extracting part of a string, this includes:
// 1. slice()
// 2. substring()
// 3. substr()

//slice() method
let memefi = 'mango, orange, banana';
let jojo = memefi.slice(6); //one param
    jojo = memefi.slice(7, 13); // two param
    jojo = memefi.slice(-6); // one negative param
    jojo = memefi.slice(-14, -8); // two negative param
    jojo = memefi.substring(7, 13 ); // work same as slice () with a slight diff.
console.log(jojo);

// converting to upper or lowercase

let myName2 = 'john';
let myName3 = myName2.toUpperCase(); //touppercase
 myName3 = myName2.toLowerCase(); //tolowercase
console.log(myName3);

// string concatenation

let jonjo = 'good morning';
let jonjo1 = 'mr abel';
let jonjo2 = jonjo.concat(' ', jonjo1);
console.log(jonjo2);

// string trim method

// the trim() method is use to remove whitspace from the string
// trimStart() method is use to remove whitespace from the start of a string
// trimEnd() method is use to remove whitespace from the end of a string

let myTrim = ' hello ';
let myTrim1 = myTrim.length;
let myTrim2 = myTrim.trim(); // trim()
let myTrim3 = myTrim.trimStart(); //trimStart()
let myTrim4 = myTrim.trimEnd(); //trimEnd()
console.log(myTrim1, myTrim2, myTrim, myTrim2.length, myTrim3, myTrim4);