# 0x04-TypeScript

[tasks](https://drive.google.com/file/d/1v8pdtmVTBL67HhKvkDNoh1i_tp69Tqo-/view?usp=drive_link)

---

### Commands to run the project directories

#### use Webpack

- copy the condig files from the task page to the working directory

```bash
# after having the files in the directory (copy them from the tasks page)
>.../0x04-TypeScript/task_0/ ls -l
js package-lock.json  package.json  tsconfig.json  webpack.config.js
```

- Update the `webpack.config.js`

make Sure to add the **mode** type :

```typescript
...
module.exports = {
  entry: "./js/main.ts",
  mode: 'development', // or 'production' !!!!!!!!!!
  ...
```

- buidling

```bash
npm intall

npm install webpack webpack-cli --save-dev

npm run build

# then the 'dist/bundle.js' directory will be created

node dist/bundle.js  
```

#### using Tsc

we can simply use `tsc` , `tsc-node` and or `node`

```bash
# transcript typescript code into javascript 
tsc task_1/js/main.ts

# it will output a js file run it with node
node task_1/js/main.js
```

---

# TypeScript Basics

This README provides a brief overview of key concepts in TypeScript, including basic types, interfaces, classes, functions, working with the DOM, generic types, namespaces, declaration merging, ambient namespaces for importing external libraries, and basic nominal typing.

## Basic Types in TypeScript

TypeScript supports various basic types such as `number`, `string`, `boolean`, `null`, `undefined`, `object`, and `symbol`, along with their respective literal types.

```typescript
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let obj: object = { key: "value" };
let sym: symbol = Symbol("sym");
```

## Interfaces, Classes, and Functions

Interfaces in TypeScript define the structure of an object, specifying the types of its properties and methods. Classes are blueprints for creating objects with specific properties and methods. Functions can also be typed using interfaces to define their input and output types.

```typescript
// Interface
interface Person {
  name: string;
  age: number;
}

// Class implementing interface
class Student implements Person {
  constructor(public name: string, public age: number) {}
}

// Typed function
function greet(person: Person): void {
  console.log(`Hello, ${person.name}!`);
}
```

## Working with the DOM and TypeScript

To work with the Document Object Model (DOM) in TypeScript, you can use type annotations to specify the types of DOM elements and properties, enabling type checking and autocompletion in your code.

```typescript
// Accessing DOM element
const myElement: HTMLElement | null = document.getElementById("myElement");

// Setting text content
if (myElement) {
  myElement.textContent = "Hello, TypeScript!";
}
```

## Generic Types

Generic types in TypeScript allow you to create reusable components that work with a variety of data types while maintaining type safety.

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<number>(10);
```

## Using Namespaces

Namespaces in TypeScript provide a way to organize code into logical groups, preventing naming conflicts. They are particularly useful when working with large codebases.

```typescript
// Namespace
namespace MathOperations {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

let sum = MathOperations.add(5, 3);
```

## Merging Declarations

TypeScript allows you to merge declarations from multiple sources, including interfaces, namespaces, and classes, providing a powerful mechanism for extending existing types.

```typescript
// Merging interfaces
interface User {
  name: string;
}

interface User {
  age: number;
}

let user: User = {
  name: "John",
  age: 30
};
```

---

## Decribe a function through an interface

```typescript
interface PrintTeacher {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
```

## Decribe a class and constructor through an interface

```typescript
    /**
 * Defining the class through a constructor by
 * describes the public properties and methods of the class
 */
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

/**
 * Defining the constructor through an interface
 */
interface StudentClassConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
            return this._firstName;
    }
}

// testing
function createStudent(
    constructor: StudentClassConstructorInterface,
    firstName: string,
    lastName: string
): StudentClassInterface {
    return new constructor(firstName, lastName);
}

const student = createStudent(StudentClass, 'Ali', 'Moussa');
console.log(student.displayName());
console.log(student.workOnHomework());
```

---

## type

In TypeScript, the `type` keyword is used to define type **aliases** or **custom types**. Type aliases allow you to create a new name for any type, including built-in types, union types, intersection types, and more complex types. This can be particularly useful for improving code readability, managing complex types, and providing semantic meaning to types.

Here's how you can use the `type` keyword to define various types:

1. **Basic Type Alias**:
  
  ```typescript
  type RowID = number;
  ```
  
  In this example, `RowID` is a type alias for `number`. This allows you to use `RowID` wherever you would use `number` in your code.
  
2. **Union Type Alias**:
  
  ```typescript
  type Color = "red" | "green" | "blue";
  ```
  
  Here, `Color` is a type alias for a union type consisting of the string literals "red", "green", or "blue". You can use `Color` to ensure that a variable only holds one of these specific string values.
  
3. **Intersection Type Alias**:
  
  ```typescript
  type User = { name: string } & { age: number };
  ```
  
  This creates a type alias `User` that represents an object with both a `name` property of type `string` and an `age` property of type `number`. Intersection types combine multiple types into one.
  
4. **Complex Type Alias**:
  
  ```typescript
  type Point = { x: number; y: number };
  type Shape = "circle" | "square";
  type Drawable = { shape: Shape; position: Point };
  ```
  
  Here, `Drawable` is a type alias that represents an object with a `shape` property holding one of the values "circle" or "square", and a `position` property holding an object with `x` and `y` numeric properties. This demonstrates combining various types and type aliases to define a more complex structure.
  

---

## String literal

A string literal in TypeScript refers to a specific string value that is explicitly defined. It's a way to restrict the possible values that a string variable can hold to a predefined set of values.

In TypeScript, string literals are defined using string literal types. You can define a string literal type by listing the specific string values that are allowed, separated by the `|` (union) operator.

For example:

```typescript
type Color = "red" | "green" | "blue";
```

---

## Ambient file

"when we have a file that contain a library or a package in javascript but we want to use it in my typescript code i need to create an ambient file"

ambient declaration files, you bridge the gap between JavaScript and TypeScript, allowing you to enjoy the benefits of TypeScript's static typing while still leveraging existing JavaScript code

**Exampe**

- `crud.js`

```javascript
export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
}

export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);

    return rowId;
}
```

- the ambient file: `crud.d.ts`

```typescript
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;
```

---

## Triple-slash

Triple-slash directives are commonly used to reference type declaration files (`.d.ts` files) for type checking purposes only. Since TypeScript treats `import` statements as actual runtime module imports, using `import` for type-only dependencies may result in unnecessary runtime code generation or bundling, which can increase the size of your compiled output.

```typescript
/// <reference path="./crud.d.ts" />

import * as CRUD from './crud';
```
