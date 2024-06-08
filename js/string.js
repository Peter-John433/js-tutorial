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

// string padding 
// means to pad a string with another string untill it reaches a specific length 
// we have padStart() method and padEnd() method

let myPad = 'hello';
let myPad1 = myPad.padStart(7, '9');
let myPad2 = myPad.padEnd(9, '*');
console.log(myPad1, myPad2);

// string repeat() method

// the repeat method is used to return a copy of a string until it reaches the given length

let myRepeat = 'hello world';
let myRepeat1 = myRepeat.repeat(5);
console.log(myRepeat1);

// string replace() method

// the replace() method is use to replace a given value with a new string value
// the replace method only replace the first match 
// the replace method is case sensitive
// to replace all matches use /g flag expression 
// to replace case insensitive use /i flag expression 
// since is case sensitive mango and MANGO will not work 
// replace method as two params, 1st is the given value, 2nd is the value to be replace with
// regular expressions are written without quotes

let myMan = 'this is mango,i love eating mango alot';
let myMan1 = myMan.replace('mango', 'orange'); // replace the first match
console.log(myMan1);
let myMan2 = myMan.replace(/MANGO/i, 'orange'); // insensitive expression
console.log(myMan2);

let myMan3 = myMan.replace(/mango/g, 'orange'); // global match expression
console.log(myMan3);

// string search methods

// indexOf() method
// indexOf() return the index position of the first occurance of a string in a string

let myIndex = 'please can you come to my place, i don\'t like coming to your \"place\"';
let myIndex1 = myIndex.indexOf('place');
console.log(myIndex1);

// lastIndexOf() method

//lastIndexOf() returns the last index position of a given string in a string
let myIndex2 = 'please can you come to my place, i don\'t like coming to your \"place\"';
let myIndex3 = myIndex2.lastIndexOf('place');
let myIndex4 = myIndex2.replace(/place/g, 'plane' )
console.log(myIndex3, myIndex4);

// search method 

//search() is use to search a string for a string or (regular expression) and return the position of a match 
let mySearch = 'let your name be glorify';
let mySearch1 = mySearch.search(/name/);
console.log(mySearch1)

/*
note:
both indexOf and search methods have similar work with slight difference

difference

1 indexof can not hold regular expression 
2. search do not use second params
*/

// match method

//match() this is use to match a sting against a string and return an array containing the matching string

let myMar = 'The rain in SPAIN stays mainly in the plain';
let myMar1 = myMar.match('ain'); 
myMar1 = myMar.match(/ain/g); // global search
myMar1 = myMar.match(/ain/i); // insensitive
myMar1 = myMar.match(/ain/gi); // global and insensitve search
console.log(myMar1);

//note: if the /g is not use it will reutrn only the first match

// matchAll() method

//matchAll() is use to match a string againts a string and return an array containing all the matching string

let doom = 'The rain in SPAIN stays mainly in the plain';
let doo1 = doom.matchAll('ain')
console.log(Array.from(doo1));

//includes()

//includes methods return true if a string contain a given string value else return false
// it's case sensitive

let manny = 'The rain in SPAIN stays mainly in the plain';
let manny1 =  manny.includes('SPAIN');
console.log(manny1);

//startWith() method

// startWith() return true if the string start with a given value else return false
// this is case sensitive 

let geo = 'The rain in SPAIN stays mainly in the plain';
let geo1 = geo.startsWith('The'); 
console.log(geo1);

let geo2 = 'The rain in SPAIN stays mainly in the plain';
let geo3 = geo2.startsWith('rain', 4); //4 represent the start position 
console.log(geo3);

// endWith() method

//endWith return true if the string end with a given value else return false
// also case sensitive

let hug = 'hello world, this is aisha';
let hug1 = hug.endsWith('aisha');
console.log(hug1)

// TEMPLATE STRING

//it can be call template string, string template or template literals all mean same thing
// template string use backticks ``;

let momo = `hello world`;
console.log(momo);

// template string allow both double and single quotes

let momo1 = `this wasn't the plan but it's okay, "john"`;
console.log(momo1);

// template string allow multiline
let momo2 = `
 hey,
 what are you 
 doing over there.
`;

console.log(momo2);

// allow variables to be use along side values
// this is also called string interpolation

let momo3 = `john`;
let momo4 = `i hate it ${momo3}`;
console.log(momo4);

// this also allow expressions

let momo5 = 4;
let momo6 = `price: ${ 5 + 5 + momo5}`;
console.log(momo6);

// also allow html templates 

let myScene = `template`;
let myArr = ['milk', 'bonvita', 'coffe'];
let myTom = `<h1> ${myScene} </h1>`;
console.log(myTom);
let gee = document.querySelector('section');
gee.innerHTML = `<h1> ${myScene} </h1>`;
