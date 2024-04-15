# ES6 data manipulation

[tasks]()

## Arrays

Arrays are a fundamental data structure in JavaScript used to store collections of elements. They offer a flexible and versatile way to work with lists of items.

#### Declaration and Initialization

```javascript
let arrayName = [element1, element2, ...];
```

#### Accessing Elements

```javascript
console.log(arrayName[index]); // Access element at index
```

#### Array Length

```javascript
console.log(arrayName.length); // Number of elements in the array
```

#### Adding and Removing Elements

```javascript
arrayName.push(element); // Add element to the end
arrayName.pop(); // Remove element from the end
arrayName.unshift(element); // Add element to the beginning
arrayName.shift(); // Remove element from the beginning
```

#### Iterating Over Arrays

```javascript
arrayName.forEach(callbackFunction); // Iterate over elements
for (let i = 0; i < arrayName.length; i++) { // Using for loop
    // Access array elements
}
```

#### Array Methods

JavaScript provides a variety of built-in methods for manipulating arrays, such as `concat()`, `slice()`, `splice()`, `indexOf()`, `find()`, `findIndex()`, `includes()`, etc.

---

## Typed Arrays

Typed Arrays provide a way to work with raw binary data directly in JavaScript. They are particularly useful for handling large amounts of binary data efficiently.

#### Typed Array Types

- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`
- `Float32Array`
- `Float64Array`

#### Creating Typed Arrays

```javascript
let buffer = new ArrayBuffer(byteLength); // Create a buffer
let typedArray = new TypedArray(buffer); // Create a Typed Array using the buffer
```

#### Accessing and Modifying Data

```javascript
console.log(typedArray[index]); // Access element at index
typedArray[index] = value; // Modify element at index
```

#### Array Buffer

Typed Arrays are backed by an underlying buffer (`ArrayBuffer`) that represents a fixed-length binary data buffer. This buffer is shared among multiple views (Typed Arrays) and provides a mechanism for efficiently sharing and transferring data between different views.

#### Performance

Typed Arrays are optimized for performance and memory efficiency, making them suitable for performance-critical tasks such as audio processing, image manipulation, and game development.

---

## Sets

Sets are a built-in object in JavaScript that allows you to store unique values of any type. They are useful when you need to keep a collection of values without duplicates.

### Usage

#### Declaration and Initialization

```javascript
// Create a new empty Set
let mySet = new Set();
```

#### Adding and Removing Values

```javascript
// Add values to the Set
mySet.add(1);
mySet.add(2);

// Remove a value from the Set
mySet.delete(2);
```

#### Checking for the Presence of Values

```javascript
// Check if a value exists in the Set
console.log(mySet.has(1)); // Output: true
```

#### Iterating Over Set Values

```javascript
// Iterate over the Set values
mySet.forEach(value => console.log(value));

// Using for...of loop
for (let value of mySet) {
    console.log(value);
}
```

#### Size of a Set

```javascript
// Get the number of elements in the Set
console.log(mySet.size); // Output: Number of elements in the set
```

#### Converting Set to Array

```javascript
// Convert a Set to an array
let arrayFromSet = Array.from(mySet);
let arrayFromSet2 = [...mySet];
```

#### Convert an array to Set

you can convert an array to a Set in JavaScript. Sets automatically eliminate duplicate values, so converting an array to a Set can be useful for removing duplicates from the array.

```javascript
let myArray = [1, 2, 2, 3, 3, 4];
let mySet = new Set(myArray);

console.log(mySet); // Output: Set(4) { 1, 2, 3, 4 }

```

---

## Map

The **`Map`** object holds key-value pairs and remembers the original insertion order of the keys. Any value (both `objects` and `primitive values`) may be used as either a key or a value

### Map vs Object

`Object` is similar to `Map`—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.

`But` Map are **better** than Object in many aspects

### Setting object properties

```javascript
const contacts = new Map();

contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true

console.log(contacts.size); // 1

```

---

## map, filter, and reduce

### .map()

The `map()` method creates a new array by applying a function to each element in the original array. It does not modify the original array.

```javascript
let newArray = array.map(callback(currentValue, index, array));
```

**Example**

```javascript
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

```

### .filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let newArray = array.filter(callback(element, index, array));
```

**Example**

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

```

### .reduce()

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

**Example**

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

```

In this example, `acc` is the accumulator that accumulates the sum of all elements in the array, starting with an initial value of 0.
