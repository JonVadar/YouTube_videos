# JavaScript Beyond Basics

Watch the video here 👉 [ADVANCE JAVASCRIPT | ES6 features](https://www.youtube.com/watch?v=_7gWP_3-7AQ)

<br><br>

## Variables
Let & const (they are block scoped)
```js
// Block scope variables
let x; // declare variable x
x = 'hello' // assign 'hello' to x

const y; // ERROR - must be assigned a value when const is declared
const z = 2 // assign 2 to z
z = 3 // ERROR - const cannot be re-assigned

const colors=['blue','red'] // assign array to const
colors = ['green'] // ERROR - const cannot be re-assigned
colors[0] = 'green' // values in array are mutable
```

<br><br>

## Template Strings

Template String and some functions

```js
const username = "JonVadar"; // normal string
const greet = `Welcome back ${username}`; // "welcome back JonVadar"
console.log(username.includes('Va')); // true
console.log(username.includes('va')); // false
console.log(username.startsWith('J')); // true
console.log(username.startsWith('V', 3)); // true, starting at index 3
console.log(username.endsWith('r')); // true
console.log(username.endsWith('n', 3)); // true, starting at end index - length (3-8) 
```

<br><br>

## Arrays/Object

### Array/Object methods

```js
// MAP - returns an array
console.dir(cars.map((car) => car.make)) // array  of 10 with only cars make

// FILTER - returns an array based on a condition
console.dir(cars.filter((car) => car.year > 2000)) // array of 4 with cars made after year 2000 

// SOME - determines if the condition is met for any element of the array
console.log(cars.some((car) => car.make > "Toyota")); // false

// EVERY - tests whether ALL elements in the array pass the test
console.log(cars.every((car) => car.year > 1987)); // true
console.log(cars.every((car) => car.year > 1988)); // false

// REDUCE - returns a calculation of all the elements in an array
console.log(cars.map((car) => car.year).reduce((prev, current) => prev + current)); // 19985
console.log([3, 3, 3].reduce((prev, current) => prev * current)); // 27
console.log(['hi', ' ', 'world!'].reduce((prev, current) => prev + current)); // 'hi world!'

// FIND - returns the value of the FIRST array element that passes a test function.
console.log(cars.find((car) => car.year > 2006)); // {make: 'Ford', model: 'Fiesta', year: 2011}
console.log([2,4,6,8,10].find((i) => i> 5)); // 6

// FINDINDEX - returns the INDEX of the FIRST array element that passes a test function.
console.log(cars.findIndex((car) => car.year < 1995)); // 5
console.log([2,4,6,8,10].findIndex((i) => i> 5)); // 2

// FROM - returns an Array from any iterable object, takes a MAP function as second argument
console.dir(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']
console.dir(Array.from([1, 2, 3, 4], (i) => i * 2)); // [2, 4, 6, 8]

// KEYS - returns an Array Iterator object with the keys of an array
console.log(Object.keys([1,2,3])); // ['0', '1', '2']
console.log(Object.keys(cars[0])); // ['make', 'model', 'year']

// ENTRIES - returns an array of a given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.
console.log(Object.entries(cars[0])); // [["make", "Ford"], ["model", "Econoline E150"], ["year", 1995]];
console.log(Object.entries([1, 2, 3])); // [["0", 1], ["1", 2], ["2", 3]];

// SET - returns a SET (object) of unique values 
console.log(new Set([1, 2, 3, 4, 3, 2])); // new Set([1, 2, 3, 4])
```

<br>

### The Spread operators

```js
// The Spread operators - breaks an iterable (array/string) 
console.log(...[2,3,4]); // 2 3 4
console.log(...'Hello'); // H e l l o
```
see the class section for more examples

<br>

### for...of VS for...in

```js
// for...of  VS  for...in
for (const key in ['jon','mike','jane']) console.dir(key); // returns keys - 0, 1, 2
for (const value of ['jon','mike','jane']) console.dir(value); // returns values - jon, mike, jane
```

<br><br>

## Functions

### Arrow functions

```js
//  Arrow functions
const myArrowFunction = () => {
  console.log("Hello");
};
myArrowFunction(); // 'Hello'
```

<br>

### Default Parameters

```js
// Functions default parameters
const favColor = (color = "green") => {
  console.log(`You like color ${color}`);
};
favColor(); // 'You like color green'
favColor('blue'); // 'You like color blue'
```

<br>

### Function Rest Parameter

```js
// Functions and REST parameter
const vals = [2, 3, 5, 6];
const addNums = (...args) => {
  console.log(args.reduce((a, b) => a + b));
};
// Breaking down the array into arguments
addNums(...vals); // 16
```

<br>

### Promises

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```js
// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
const checkNum = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 5) {
        resolve(num);
      } else {
        reject(Error("Bad Num"));
      }
    }, 3000);
  });
};

// This function takes a number and returns a Promise which evaluates the result after 3 seconds
checkNum(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

<br>

### async/await

`async` and `await` make promises easier to write.

```js
// async makes a function return a Promise
// await makes a function WAIT for a Promise
// The await keyword can ONLY be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
let myData;
const getData = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products/1");
    myData = await res.json();
    console.log(myData);
  } catch (err) {
    console.log(err)
  }
};

getData(); // returns the response as an object
```


<br><br>

## Classes

```js
// Exported to be imported in a Module
export class User {
    // Passing parameters
    constructor(username, email, status = "guest") {
        (this.username = username), (this.email = email), (this.status = status);
    }

    // Static methods - using spread operator to accept all arguments
    static registerUser(...args) {
        return new User(...args);
    }

    // Getters
    get sayHi() {
        return `Hello ${this.username}`;
    }

    // Setters
    set changeStatus(newStatus) {
        this.status = newStatus;
    }

    // Normal functions
    changeUsername(newUsername) {
        this.username = newUsername;
    }
}
```

<br><br>

## Modules

```js
// Import data from another file - NOTE: Script tag must be of type "module"
import { User } from './UserClass.js'
```
