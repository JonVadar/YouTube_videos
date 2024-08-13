## 👉 [Watch on YouTube](https://youtube.com/playlist?list=PL38wFHH4qYZXBPfRfojZqa3CKuAxYAt4V&si=QvlQCiazUsqPYdS9) 👈

# TypeScript

TypeScript is a syntactic superset of JavaScript which adds static typing.
This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

## Installing complier

```
npm install typescript --save-dev
```

## Compiling .ts files into .js

```
npx tsc
```

## Typescript config file

We can generate the TypeScript config file by the following command:

```
npx tsc --init
```

some of the values that are commonly changed are as follows:

```json
"target": "es6", // Set the JavaScript language version
"rootDir": "./src", // Specify the root folder
"outDir": "./build", // Specify the build/output folder
```

## Type Assignment

### Implicit

```ts
let fname = "Jon"; // Type inferred to 'string'
let age = 30; // Type inferred to 'number'
let admin = true; // Type inferred to 'boolean'

fname = 33; // ERROR: Type 'number' is not assignable to type 'string'.
```

### Explicit

```ts
let fname: string = "Jon"; // Type is assigned to 'string'
let age: number = 30; // Type is assigned to 'number'
let admin: boolean = true; // Type is assigned to 'boolean'

fname = 33; // ERROR: Type 'number' is not assignable to type 'string'.
```

### Any special type

```ts
let fname: any = "Jon"; // Type is assigned to 'any'

fname = 33; // Allowed
fname = true; // Allowed
```

### Arrays

```ts
const coords = [123.43, 4354.3]; // Array of ONLY 'number', type inferred
const rgba: number[] = [34, 125, 255, 0.4]; // Array of ONLY 'number'
const colors: string[] = ["red", "green", "blue"]; // Array of ONLY 'string'

coords.push("lat"); // ERROR: only type 'number' allowed
rgba.push(false); // ERROR: only type 'string' allowed
colors.push("yellow"); // Allowed

const g = rgba[1]; // Type of 'g' is 'number'

const usernames: readonly string[] = ["Jon", "Sarah", "Mike"]; // Readonly array
usernames.push("Alex"); // ERROR: can't push to readonly array
```

### Tuples

A tuple is a typed array with a **pre-defined length and types for each index**.

```ts
// This tuple must an array with 3 elements with a 'number' at index 0, a 'string', at index 1, and a 'boolean' at index 2
let password: [number, string, boolean]; // Initialize a tuple

password = [3, "bob", true]; // Accepted
password = ["34", "bob", true]; // ERROR: index 0 must be 'number'
password = ["34", "bob"]; // ERROR: must have 3 elements
```

### Named Tuples and destructuring

```ts
// This will provide more context from tuples
let chart: [x: number, y: number, xLabel: string, yLabel: string];

chart = [2.3, 5.03, "alpha", "beta"];

const [x, y] = chart; // 'x' and 'y' would have the value of 2.3 and 5.03, and type of 'number'
```

### Objects

```ts
// 'user' object must have and 'id' of type number, a 'name' of type 'string', and a 'isActive' of type 'boolean'
const user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Jon",
  isActive: false,
};

user.name = "Bob"; // Allowed
user.name = 34; // ERROR: Type 'number' is not assignable to type 'string'.
```

### Objects with optional properties

```ts
const user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Jon",
}; // ERROR: Property 'isActive' is missing.

// Providing a ? after the property name marks it as 'nullable'
const user: { id: number; name: string; isActive?: boolean } = {
  id: 1,
  name: "Jon",
}; // Allowed

user.isActive = true; // Allowed
```

### Aliases

We can define an alias using the `type` keyword.

```ts
// Defining a primitive custom type/alias
type PublishedYear = number;

// Defining a variable of type 'PublishedYear'
const userPublishedYear: PublishedYear = 1989;

// Defining an object pattern as a custom type called 'post'
type Post = {
  id: number;
  title: string;
  published_year: PublishedYear; // Custom types/aliases can be used in one another
  published: boolean;
};

// Defining a new variable of type 'Post'
const newPost: Post = {
  id: 1,
  title: "My new book",
  published_year: 2020,
  published: true,
}; // Allowed

const newPost2: Post = { id: 2, title: "Book tour", published_year: 2019 }; // ERROR: Property 'published' is required in type 'Post'.
```

### Interfaces

Interfaces are similar to type aliases, except they only apply to `object` types. We can define an interface using the `interface` keyword.

```ts
// NOTE: there is no assignment operator (=) when defining an interface

interface User {
  id: number;
  name: string;
  role?: string;
}

interface Post {
  id: number;
  title: string;
  created_at: Date;
  author: User;
}

const newUser: User = { id: 1, name: "Bob" };
const newPost: Post = {
  id: 1,
  title: "Coding is fun",
  created_at: new Date(),
  author: newUser,
};

console.log(newPost);

/**** OUTPUT ****
{
  id: 1,
  title: 'Coding is fun',
  created_at: 2024-08-03T03:08:32.450Z,
  author: { id: 1, name: 'Bob' }
}
****************/
```

### Extending Interfaces

```ts
interface Person {
  id: number;
  name: string;
}

interface User extends Person {
  role: string;
  isActive: boolean;
}

const newUser: User = { role: "admin", isActive: true }; // ERROR: missing 'id' and 'name' properties

const newUser: User = { role: "admin", isActive: true, id: 1, name: "Bob" }; // Allowed
```

### Union (OR) types

Union types are used when a value can be **more than a single type**.

```ts
// 'statusCode' can be either 'string' or 'number'
let statusCode: string | number;

statusCode = 1; // Allowed
statusCode = "33"; // Allowed
statusCode = true; // ERROR: only 'string' or 'number'
```

### Functions

```ts
// Return types
function getAge(): number {
  return 33; // Allowed
  return "User age is 33"; // ERROR: return type must be a 'number'
}

// Void return type
function getAge(): void {
  console.log("User age is 33"); // Allowed
  return 33; // ERROR: can't return anything
}

// NO Parameters types: Parameters have implicitly 'any' type. **AVOID THIS**
function addNums(a, b): number {
  return a + b;
}

// Parameters types
function addNums(a: number, b: number): number {
  return a + b;
}

addNums(2, 4); // Allowed: returns 6
addNums("2", 4); // ERROR: arguments must be of type 'number'

// Optional parameters
function addNums(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

addNums(3, 2); // Allowed: returns 5
addNums(3, 2, 4); // Allowed: returns 9

// Parameters with default values
function addNums(a: number, b: number, c: number = 0): number {
  return a + b + c;
}

addNums(2, 2); // Allowed: returns 4
addNums(2, 2, 2); // Allowed: returns 6

// With rest operator (...)
function addNums(...others: number[]) {
  return others.reduce((prev, curr) => prev + curr, 0);
}

addNums(2, 4, 2, 2, 3, 45); // Allowed: returns 58
```

### Classes

TypeScript adds types and visibility modifiers to JavaScript classes.

```ts
class Person {
  private name: string; // Private property only accessible within the class itself
  protected age: number; // Protected property accessible within the class itself and its children
  public email: string; // Public (Default) property accessible from anywhere

  public constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getName(): string {
    return this.name;
  }
}

class User extends Person {
  public getAge() {
    return this.age; // Allowed
  }
}

const user = new User("Bob", 22, "bob@example.com");

console.log(user.name); // ERROR: 'name' is private
console.log(user.getName()); // Allowed: returns 'Bob'
console.log(user.age); // ERROR: 'name' is protected
console.log(user.email); // Allowed
```

### Type Casting (Type Assertion)

we can cast a variable using the `as` keyword or `<>` symbols, however this has no runtime effect and it is NOT converting the variable type, it is simply treated as the asserted type we are passing.

```ts
let id: any = 2;
let pid = id; // 'pid' is of type 'any'

let cid = id as number; // 'cid' is of type 'number'
let cid2 = <number>id; // 'cid2' is of type 'number'
```
