# 0x00-ES6_basic

[tasks page]()

## Tools

### [Jest](https://jestjs.io/docs/getting-started)

- **Integrated Assertion Library**: Jest comes with its own assertion library, allowing you to write test assertions without additional setup.
- **Automatic Mocking**: Jest automatically mocks dependencies, simplifying the setup of tests and reducing the need for manual mocking.
- **Snapshot Testing**: Snapshot testing captures the output of components or functions and compares it with stored snapshots to detect unexpected changes.
- **Mock Functions**: Jest provides built-in support for creating mock functions to simulate behavior and track calls during testing.
- **Code Coverage Reporting**: Jest collects code coverage information during test execution and generates reports to identify untested code paths.
- **Asynchronous Testing Support**: Jest simplifies testing asynchronous code with utilities for handling promises, timers, and asynchronous operations.

### [Babel](https://babeljs.io/docs/)

**What is Babel?**
Babel is a JavaScript compiler that transforms modern JavaScript code (ES6+ syntax) into backward-compatible versions (ES5 or earlier) that can run in older browsers or environments. It enables developers to write code using the latest JavaScript features while ensuring compatibility with a wider range of platforms.

**Key Features of Babel:**

- **Transpilation**: Babel transpiles modern JavaScript code into a compatible version that can be executed in environments that do not support the latest language features.
- **Plugin System**: Babel features a plugin-based architecture that allows developers to customize the transformation process according to their project's requirements.
- **Presets**: Babel presets are pre-configured sets of plugins that provide common transformation configurations for specific environments or use cases.
- **Source Maps**: Babel generates source maps, which map the transformed code back to its original source, facilitating debugging and error tracking in development environments.

### [ESLint](https://eslint.org/)

**What is ESLint?**
ESLint is a static code analysis tool for identifying and reporting patterns and problems in JavaScript code. It helps maintain code quality, enforce coding standards, and identify potential errors or inconsistencies in the codebase.

**Key Features of ESLint:**

- **Linting Rules**: ESLint provides a set of configurable linting rules that define coding standards and best practices for JavaScript code.
- **Extensibility**: ESLint supports plugins and custom rules, allowing developers to extend and customize linting rules according to project-specific requirements.
- **Integration with Editors and CI/CD Pipelines**: ESLint integrates with code editors and IDEs, providing real-time feedback and suggestions to developers as they write code. It can also be integrated into CI/CD pipelines to enforce code quality checks in automated workflows.
- **Automatic Fixes**: ESLint can automatically fix certain types of issues identified in the code, such as indentation errors, unused variables, and missing semicolons, using the `--fix` option.

In summary, Jest is a testing framework for JavaScript, Babel is a compiler for modern JavaScript syntax, and ESLint is a static code analysis tool for identifying and fixing issues in JavaScript code. Together, these tools enable developers to write, test, and maintain high-quality JavaScript codebases effectively.

# 0x00. ES6 Basics

### What is ES6?

ES6, short for ECMAScript 6, is a significant update to the JavaScript language, bringing in a bunch of new features and improvements. It enhances the readability and efficiency of your code, making JavaScript development more enjoyable.

### Constants vs Variables

In JavaScript, you have two ways to declare things you want to store values in: constants and variables.

- **Constants** (`const`): Use these when you want something to stay the same once you've set it. It's like nailing something to the wall; you can't move it later.
  
  ```javascript
  const pi = 3.14;
  ```
  
- **Variables** (`let`): These are for when you might need to change the value later. It's like a sticky note; you can write and rewrite on it.
  
  ```javascript
  let count = 0;
  ```
  

### Block-Scoped Variables

When you declare a variable inside a curly brace `{}`, it stays inside there. Think of it like a secret code written on a sticky note in a room; it's only visible inside that room.

```javascript
{
  let secret = 'Shhh!';
  console.log(secret); // 'Shhh!'
}

console.log(secret); // Error: secret is not defined
```

### Arrow Functions and Default Parameters

Arrow functions are like shortcuts for writing functions. They're cool because they're shorter and can have default values for their parameters.

```javascript
const double = (x) => x * 2;

const greet = (name = 'stranger') => {
  console.log(`Hello, ${name}!`);
};

double(5); // 10
greet();   // Hello, stranger!
```

[more of arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Rest and Spread Parameters

Rest parameters collect all remaining arguments into an array, while the spread operator spreads elements of an iterable (like an array) into individual elements.

```javascript
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 15
```

### String Templating

String templating lets you embed expressions within strings using `${}`.

```javascript
const name = 'John';
console.log(`Hello, ${name}!`); // Hello, John!
```

### Object Creation and Properties

- **Shorthand Property Assignment**:

In ES6, if the property name and variable name are the same, you can omit the property name when creating an object literal.

```javascript
const x = 10, y = 20;

// Shorthand property assignment
const point = { x, y };

console.log(point); // Output: { x: 10, y: 20 }
```

- **Computed Property Names**:

ES6 allows you to use expressions for property names in object literals using square brackets (`[]`).

```javascript
const propName = 'foo';

const obj = {
  [propName]: 'bar', // Computed property name
};

console.log(obj); // Output: { foo: 'bar' }blue'
```

Computed property names can also include expressions and function calls to dynamically generate property names.

```javascript
const prefix = 'user';
const suffix = '123';

const obj = {
  [`${prefix}-${suffix}`]: 'John Doe', // Computed property name with expression
};

console.log(obj); // Output: { 'user-123': 'John Doe' }
```

- **Object Destructuring**:

Object destructuring is a powerful feature that allows you to extract properties from objects and assign them to variables.

```javascript
const person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

const { name, age } = person;

console.log(name); // Output: 'John'
console.log(age);  // Output: 30
```

You can also assign default values to variables in case the property doesn't exist in the object:

```javascript
const { name, age, gender = 'Male' } = person;

console.log(gender); // Output: 'Male' (since 'gender' property doesn't exist in 'person')
```

### Method properties

Method properties in JavaScript are a shorthand notation for defining functions within object literals or class declarations. They allow you to define functions as properties of an object without using the `function` keyword explicitly.

```javascript
const obj = {
  // Method property using shorthand notation
  myMethod() {
    // Function body
}
};
// *** instead of ***
const obj = {
  // Method property using shorthand notation
  myMethod: function() {
    // Function body
}
};


//*** we can also use arrow functions
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  }
};

obj.greet(); // Output: Hello, undefined!
```

### Iterators and `for-of` Loops

Iterators are like tour guides for collections. They help you navigate through arrays, strings, and more.

- An **iterable** is like the collection itself, such as an array or a string. It's something that you can loop over or iterate through.
- An **iterator** is like the "pointer" or "index" that keeps track of where you are in the collection and provides a way to access the current element and move to the next one.

```javascript
const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num); // 1, 2, 3
}
```

**Generator Function**

A generator function is a special type of function in JavaScript that allows you to define an iterator. It's declared using the `function*` syntax

```javascript
function* myGeneratorFunction() {
  // Function body
}

```

When a generator function is called, it doesn't execute its code immediately like regular functions. Instead, it returns an iterator object called a generator. This generator can then be used to control the execution of the generator function's code.

#### **Yield Keyword**:

Inside a generator function, the `yield` keyword is used to pause and resume the execution of the function. When `yield` is encountered, it suspends the function's execution and returns a value to the caller. The state of the function is saved, allowing it to be resumed later.

```javascript
function* myGeneratorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

```

In this example, `yield` is used three times to return different values (`1`, `2`, and `3`) each time the generator function is called.

#### **Iterator Protocol**:

Generator functions implement the iterator protocol in JavaScript. This protocol defines a standard way to produce a sequence of values using the `next()` method.

```javascript
const generator = myGeneratorFunction();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

```

1. In this example, `next()` is called four times on the generator, each time resuming the execution of the generator function until it reaches the next `yield` statement.

**Generator functions are particularly useful for defining custom iterators and implementing lazy evaluation, where values are generated on-demand rather than all at once. They provide a powerful mechanism for working with sequences of data in JavaScript.**

#### example:

```javascript
// Define a generator function
function* myGeneratorFunction() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

// Create an iterator from the generator function
const generator = myGeneratorFunction();

// Call next() to iterate over the generator
console.log(generator.next()); // Output: { value: 'Hello', done: false }
console.log(generator.next()); // Output: { value: 'World', done: false }
console.log(generator.next()); // Output: { value: '!', done: false }
console.log(generator.next()); // Output: { value: undefined, done: true }

```
