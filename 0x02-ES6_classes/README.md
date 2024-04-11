# 0x02-ES6_classes

[tasks]()

---

Classes are a template for creating objects. They encapsulate data with code to work on that data.

## Defining classes

Defining classes in JavaScript involves using the `class` keyword followed by the class name and a code block containing the class's properties and methods. Here's a breakdown of how to define classes in JavaScript:

```javascript
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

}

```

---

## Constructor

In JavaScript classes, the `constructor` method is a special method that is automatically called when a new instance of the class is created. It's used for initializing the newly created object's properties or performing any other setup that needs to be done when the object is instantiated.

1. **Initialization**: The primary purpose of the constructor is to initialize the object's properties based on the arguments passed when creating a new instance of the class.
  
2. **Arguments**: The constructor can accept parameters, which are values passed when creating an instance of the class. These parameters are used to set up the initial state of the object.
  
3. **`this` keyword**: Inside the constructor, the `this` keyword refers to the instance of the class being created. It's used to assign values to the object's properties.
  

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

```

---

## Static

The `static` keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

```

---

## Field declarations

Field declarations in JavaScript classes allow you to define instance-specific properties directly within the class body.

Field declarations provide a more concise and readable syntax for initializing and declaring instance properties compared to using the constructor method.

#### Syntax:

Field declarations use a simplified syntax where you declare the property name followed by an optional initializer (`=`) to set an initial value.

```javascript
class MyClass {
  // Field declaration with an initial value
  myField = 10;

  // Field declaration without an initial value
  anotherField;
  
  // Computed field
  computedField = this.calculateValue();

  // Field declaration with a function initializer
  functionField = () => {
    console.log("This is a function field.");
  }

  // Computed field method
  calculateValue() {
    return this.myField * 2;
  }
}

```

#### Access and Visibility:

- Field declarations support public, private, and static access modifiers.
  
- Public fields are accessible from outside the class, while private fields are only     accessible from within the class.
  
- You can use the `#` symbol to declare private fields.
  

```javascript
class MyClass {
  // Public field
  publicField = "Public";

  // Private field
  #privateField = "Private";

  // Static field
  static staticField = "Static";

  // Static private field
  static #staticPrivateField = "Static Private";
}

```

#### Private properties

```javascript
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

```

---

## Inheritance

Inheritance in JavaScript refers to the ability of a class (subclass) to acquire properties and methods from another class (superclass). The subclass can extend the functionality of the superclass by adding its own properties and methods or by overriding the existing ones.

- The `extends` keyword is used in *class declarations* or *class expressions* to create a class as a child of another constructor (either a class or a function).
  
- The `super` keyword is used in subclasses to call methods of the superclass.
  
- It can be used in the constructor of the subclass to call the constructor of the superclass (`super()`), or to call methods of the superclass (`super.method()`).
  

```javascript

class Bird extends Animal {
  constructor(name, color) {
    super(name); // Call superclass constructor
    this.color = color;
  }

  speak() {
    super.speak(); // Call superclass method
    console.log(`${this.name} chirps.`);
  }
}

let bird = new Bird("Tweetie", "blue");

bird.speak(); // Output: Tweetie makes a sound. Tweetie chirps.

```

---

## getter/settter

Getter methods allow you to retrieve the value of a property, while setter methods allow you to set or modify the value of a property

```javascript
class MyClass {
  #value = 0; // Private field

  // Getter method for private field
  get value() {
    return this.#value;
  }

  // Setter method for private field
  set value(newValue) {
    if (newValue >= 0) {
      this.#value = newValue;
    } else {
      console.log("Value must be greater than or equal to 0.");
    }
  }
}

let obj = new MyClass();

// Using the setter method
obj.value = 10;

// Using the getter method
console.log(obj.value); // Output: 10

// Trying to set a negative value
obj.value = -5; // Output: Value must be greater than or equal to 0.
console.log(obj.value); // Output: 10 (value remains unchanged)

```

---

## abstract class

An abstract class in programming is a class that cannot be instantiated directly and is meant to serve as a blueprint for other classes. Abstract classes are designed to be extended by other classes, which then provide concrete implementations for the abstract methods defined in the abstract class.

**May contain abstract methods**: Abstract classes may contain abstract methods, which are methods that are declared but not implemented in the abstract class. Subclasses of the abstract class must provide concrete implementations for these abstract methods.

```javascript
class Shape {
  constructor() {
    ...
    // Abstract method for calculating area
    if (typeof this.calculateArea !== 'function') {
			throw new Error(
				'Class extending Building must override calculateArea',
			);
		}
  }

}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Concrete implementation of calculateArea method
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Attempting to instantiate Shape will throw an error
// const shape = new Shape(); // Error: Abstract classes cannot be instantiated

// Creating an instance of Circle is allowed
const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: ~78.54

```

---

---

## Metaprogramming and symbols

Metaprogramming refers to the ability of a program to manipulate itself or other parts of the program during runtime. In JavaScript, one of the key features that facilitates metaprogramming is the use of symbols.

### Symbols:

A symbol is a unique and immutable data type introduced in ECMAScript 2015 (ES6). Each symbol value returned from `Symbol()` is **unique**, and symbols are often used as **unique identifiers or keys** in objects.

#### Creating Symbols:

You can create symbols using the `Symbol()` function. Each invocation of `Symbol()` returns a **new, unique** symbol.

```javascript
const mySymbol = Symbol();
```

#### Symbol Properties:

Symbols can be used as property **keys** in objects. When used as keys, symbols create non-enumerable properties that are not accessible via `for...in` loops or `Object.keys()`.

```javascript
const mySymbol = Symbol();

const obj = {
  [mySymbol]: 'value'
};

console.log(obj[mySymbol]); // Output: 'value'
console.log(Object.keys(obj)); // Output: []

```

#### Symbol.toStringTag

In JavaScript, the `Symbol.toStringTag` property is a well-known symbol that allows objects to customize their default string representation. By defining a getter method for `Symbol.toStringTag` in a class, you can specify a custom string tag that will be used when converting instances of that class to a string.

```javascript
class MyClass {
  get [Symbol.toStringTag]() {
    return 'CustomStringTag';
  }
}

const obj = new MyClass();

console.log(`${obj}`); // Output: [object CustomStringTag]

```

1. **Square Brackets**: The square brackets `[]` are used to define a computed property name in JavaScript. This means that the property name is not fixed but can be dynamically computed at runtime. Whatever expression inside the square brackets evaluates to becomes the property name.
  
2. **Symbol.toStringTag**: `Symbol.toStringTag` is a special well-known symbol in JavaScript. It allows objects to customize their default string representation. When an object is converted to a string (e.g., using `Object.prototype.toString.call(obj)`), the value returned by `Symbol.toStringTag` will be used as part of the string representation.
  

#### Symbol.toPrimitive:

`Symbol.toPrimitive` can handle the implicit type conversions to numbers and strings

```javascript
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter method for Symbol.toPrimitive with hint "number"
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}

// Example usage:
const myClass = new HolbertonClass(10, 'New York');

console.log(Number(myClass)); // Output: 10
console.log(String(myClass)); // Output: New York

```

- The `Symbol.toPrimitive` method is implemented as a getter method within the class. This method is invoked when the class is implicitly coerced into a primitive value (either a number or a string).
- Inside the `Symbol.toPrimitive` method, we check the hint parameter to determine the type of coercion being performed. If the hint is `'number'`, we return the `_size` attribute; otherwise, we return the `_location` attribute.
- When the class instance `myClass` is cast into a number using `Number(myClass)`, it returns the size (`10`), and when it's cast into a string using `String(myClass)`, it returns the location (`'New York'`).

#### Symbol.species

`Symbol.species` is a well-known symbol in JavaScript that is used to customize the behavior of certain built-in methods that create new instances. It allows you to specify a constructor function that should be used to create new instances of derived objects.

1. **Controlled by Built-in Methods**:
  
  - Many built-in methods in JavaScript, such as `map()`, `filter()`, `slice()`, and others, can create new instances based on the original instance's prototype.
  - When these methods need to create a new instance, they check the `Symbol.species` property of the original instance's constructor to determine which constructor function to use for creating the new instance.
2. **Customization and Polymorphism**:
  
  - By default, `Symbol.species` is set to `Array` for built-in methods like `map()` and `filter()`. This means that when you call `array.map()` or `array.filter()`, the new instance created will be an `Array` instance.
  - However, you can customize `Symbol.species` in your own classes to control the type of instances created by similar methods you define in your class.
3. **Usage**:
  
  - To use `Symbol.species` in your class, you define a static getter method named `[Symbol.species]` that returns the constructor function to be used for creating new instances.
  - When built-in methods or other methods in your class need to create new instances, they access the `Symbol.species` property of the original instance's constructor to determine which constructor function to use.

```javascript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array; // Return Array constructor
  }
}

const myArray = new MyArray(1, 2, 3);
const newArray = myArray.map(x => x * 2); // Creates a new instance using Symbol.species (Array)
console.log(newArray instanceof MyArray); // Output: false
console.log(newArray instanceof Array); // Output: true

```

In this example, `MyArray` extends `Array` and provides a custom implementation of `Symbol.species` that returns the `Array` constructor. When `map()` is called on `myArray`, it creates a new instance using `Symbol.species`, which is `Array`, so the result is a regular `Array` instance, not an instance of `MyArray`.
