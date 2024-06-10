//ARRAY

// array is a special variable that can hold multiple values
// best way to declare an array is through the const key word
// array can be access by referring to the index number, j.s index number start from 0, 1, 2
// array can be create then value can later be assign
// array is an object
// array use a j.s key word call new Array()
// new array can also be use to create array with multiple value
// the best way to create array is by using the array literals
// array can be converted to string using the toString() function
// when array is been converted to string it will return values separeted with commas 


const myArr = ['man', 'woman', 'children'];

console.log(myArr);

console.log(myArr[0]); // accessing a value in an array

console.log(myArr[2]);

const name = []; // empty array

name[0] = 'john'; // assign value

name[0] = 'peter'; // changing assigned value

console.log(name);

// J.S NEW ARRAY KEYWORD

const myName = new Array('goo', 'boo'); //array key word

console.log(myName, typeof myName, typeof myArr);


// CONVERT AN ARRAY TO STRING

const newArr = ['jane', 'angel', 'benard'];

const arrName = newArr;
const doo = Array.isArray(arrName); //checking if is an array
console.log(doo, arrName instanceof Array); //checking if an object is the instance of it constructor

const fruits = ['gova', 'orange', 'mango'];
// const name2 = fruits.at(1);
//  name2 = fruits.join('-');
fruits[3] = 'glo';
console.log(fruits);

//  fruits[fruits.length] = 'gee';
//  fruits.push('goo');

// const fruit = fruits[0]; // accessing the first array element

// const fruit1 = fruits[fruits.length - 1]; // accessing the last array element

// // looping an array element 

// const fruit2 = fruits.forEach(myFunction);

// function myFunction(value){
//     console.log(value);
// }

// let ben = fruits.length;
// let gee = i = 0;
//  for( gee; i < ben; i++){
//     console.log(fruits[i])
//  }

const name4 = ['job', 'idris', 'pee', 'jona'];

// const name5 = ['job', 'idris', 'pee', 'jona'];
// name.pop();
// name.push('gona');
// name.shift();
// name.unshift('gee');
// delete name[0]

// let jojo = name4.concat(name5);
// console.log(jojo, name.length);

// console.log(name4.copyWithin(1, 0));
// console.log(name4[name4.length - 1]);

// const junee = [1, 2, 5, 9, 15, 20, 5,  18];
// const numb = junee.find(x => x > 10);
// const numb1 = junee.findIndex(x => x > 10);
// const numb2 = junee.includes(9);
// const numb3 = junee.indexOf(5);
// const numb8 = junee.lastIndexOf(5);
// console.log(numb, numb1, numb2, numb3, numb8);


const dika = ['pen', 'book', 'meter-rule'];

// dika.pop();
// const dika1 = dika.pop();
// dika.push('jotter');
// dika.shift();
// dika.unshift('doo');
// const delight = dika.join("-");
// const delight = dika[0];
//  const delight = dika.at(0);
// const delight = dika[dika.length - 1];
// const delight = dika.toString();
// const delight = dika.slice(1, 2);
// const delight = ;
// console.log(delight);
console.log(dika.splice(0, 2, 'foo', 'fee'))

const lilo = [10, 2, 4, 9, 5, 5, 3, 1];
// naughty.push(25);

// const raw = naughty.find(stayClose);
//  lilo.findIndex(stayClose);

// function stayClose(value){
//   return console.log( value > 7)
// }

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// } 
// console.log(myFunction())



// const raw2 = naughty.find(x => x > 4);
// console.log(raw2);

// ARRAY SORT METHODS

const courses = ['math', 'biology', 'geo', 'eng'];
console.log(courses);
courses.sort().reverse();
// courses.reverse();
console.log(courses);

const courses1 = ['math', 'biology', 'geo', 'eng'];
// const courses2 = courses1.toSorted();
const courses2 = courses1.toSorted().toReversed();
console.log(courses2);

const numb = [3, 2, 6, 8, 1, 10];
numb.sort();

//compare function
console.log(numb);
let danger = numb.sort(function(a,b){return a - b});
console.log(danger);

// ARRAY ITERATION METHODS

const dodo = ['gym', 'flew', 'dump', 'hello'];
const dodo1 = dodo.forEach(myNames);

function myNames(value, index, array){
    return console.log(value, index, array);
}

const daka = [ 2, 4, 6, 8];
const daka1 = daka.map(adide);

function adide(value, array, index){
    return console.log(value * 2);
}

const saa = [4, 4, 5, 2, 20, 19];
console.log(saa);
const saa1 = saa.filter((x) => x > 10);
console.log(saa1);

const condo = saa.reduce(done);
function done(total, value){
    return total * value
}
// const condo = saa.reduceRight(x => x + 2);
console.log(condo);

const fake = saa.every(x => x > 1);

console.log(fake);

const donKey = saa.keys();
let feel = '';
for(let x of donKey) {
    feel += x;
}

console.log(feel);

const alive = saa.entries();

let decamp = '';

for( let v of alive){
    decamp += v + '\n';
}
console.log(decamp);