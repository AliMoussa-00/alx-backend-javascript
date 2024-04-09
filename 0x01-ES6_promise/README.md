# 0x01-ES6_promise
[tasks]()
---
## Promise

In JavaScript, a **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

This lets **asynchronous** methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a *promise* to supply the value **at some point in the future**.

It allows you to handle asynchronous operations more easily and elegantly, especially when dealing with multiple asynchronous tasks that depend on each other or need to be executed sequentially.

Promises provide a cleaner and more readable way to work with asynchronous code compared to traditional callback functions. They also support more advanced features, such as **async/await** syntax, which further simplifies asynchronous code.

### Creation:

You create a new Promise object using the `new` keyword and passing a function (usually called the **executor**) as an argument. This function takes two parameters, `resolve` and `reject`, which are functions themselves.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation            
  if (/* everything turned out fine */) {
     resolve("Stuff worked!");
  }
  else {
     reject(Error("It broke"));
  }
});

```

### States:

A Promise can be in one of three states:

- **fulfilled** - The action relating to the promise succeeded
- **rejected** - The action relating to the promise failed
- **pending** - Hasn't fulfilled or rejected yet
- **settled** - Has fulfilled or rejected

### Consuming:

You can consume the result of a Promise using its `then()` method. This method takes two optional callback functions as arguments: one for handling the resolved value (`onFulfilled`) and one for handling any error that occurred (`onRejected`).

*`then()` takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.*

```javascript
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

### Chaining:

Promises can be chained together using multiple `then()` calls, allowing you to execute asynchronous operations sequentially or perform multiple asynchronous operations in sequence.

```javascript
myPromise
  .then((result) => {
    // Handle the first result
    return anotherAsyncOperation();
  })
  .then((result) => {
    // Handle the result of the second operation
  })
  .catch((error) => {
    // Handle any errors that occurred in the chain
  });

```

### Error Handling:

You can handle errors using the `catch()` method at the end of a promise chain to catch any errors that occurred in the chain.

```javascript
myPromise.catch((error) => {
  // Handle errors that occurred during the Promise chain
});

```

### Promise.all()

`Promise.all()` is used to handle multiple asynchronous operations concurrently and waits until all of them are resolved or any one of them is rejected. It takes an array of promises as input and returns a single promise that resolves with an array of the results when all of the input promises have resolved, or rejects with the reason of the first promise that rejects.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });

```

The `results` variable in the `.then()` callback is an array containing the resolved values of all promises. The resolved values are `in the same order as the promises provided in the input array`.

### Promise.resolve():

`Promise.resolve()` is a static method in JavaScript's Promise API. It returns a new Promise object that is resolved with a given value. If the value is a promise, `Promise.resolve()` returns the promise itself.

`Promise.resolve()` is commonly used in scenarios where you need to ensure that a value is wrapped in a promise, either because you're dealing with asynchronous code or you want to handle both synchronous and asynchronous cases uniformly. It's especially useful when working with functions that may return promises or immediate values.

```javascript
function signUpUser() {
	return Promise.resolve({
		firstName: 'firstName'
		lastName: 'lastName',
	});
}

console.log(signUpUser('Bob', 'Dylan'));
```

### Promise.reject():

`Promise.reject()` is a static method in JavaScript's Promise API. It returns a new Promise object that is rejected with a given reason.

```javascript
function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

console.log(uploadPhoto('guillaume.jpg')); //  <rejected> Error: guillaume.jpg cannot be processed 
```

### Promise.allSettled():

`Promise.allSettled()` is a static method in JavaScript's Promise API introduced in ECMAScript 2020 (ES11). It accepts an iterable (such as an array) of promises as input and returns a single promise that resolves after all of the input promises have settled (either fulfilled or rejected). Unlike `Promise.all()`, which rejects immediately if any of the input promises rejects, `Promise.allSettled()` waits for all promises to settle before resolving.

- `iterable`: An iterable (such as an array) containing the promises to observe.

The returned promise settles in one of the following ways:

- If all promises in the iterable fulfill, the returned promise resolves with an array of objects, each representing the outcome of each promise. Each object has the following structure:
  
  - `{ status: 'fulfilled', value: <fulfilledValue> }`
    
    Where `<fulfilledValue>` is the resolved value of the corresponding promise.
    
- If any promise in the iterable rejects, the returned promise still resolves but with an array of objects representing the outcome of each promise. Each object has the following structure:
  
  - `{ status: 'rejected', reason: <rejectionReason> }`
    
    Where `<rejectionReason>` is the reason for the rejection of the corresponding promise.
    

Example:

```javascript
const promise1 = Promise.resolve('Resolved value');
const promise2 = Promise.reject(new Error('Rejected value'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Delayed value'));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.error('Rejected:', result.reason.message);
      }
    });
  });

```

**Output**:

```javascript
Fulfilled: Resolved value
Rejected: Rejected value
Fulfilled: Delayed value

```

In this example:

- `promise1` is fulfilled with the value `'Resolved value'`.
- `promise2` is rejected with an error message `'Rejected value'`.
- `promise3` is resolved after a delay with the value `'Delayed value'`.
- `Promise.allSettled()` waits for all promises to settle and then logs the status and value/reason of each promise.

### Promise.race():

`Promise.race()` is a static method in JavaScript's Promise API. It accepts an iterable (such as an array) of promises as input and returns a single promise that resolves or rejects as soon as one of the promises in the iterable settles (either fulfills or rejects).

The returned promise settles in one of the following ways:

- If any promise in the iterable fulfills (i.e., resolves), the returned promise resolves with the value of the first fulfilled promise.
- If any promise in the iterable rejects, the returned promise rejects with the reason of the first rejected promise.

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 500, new Error('Promise 2 rejected')));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log('First settled promise:', result);
  })
  .catch((error) => {
    console.error('First settled promise rejected with error:', error);
  });

```

**Output (after 500 milliseconds):**

```javascript
First settled promise rejected with error: Error: Promise 2 rejected
```

In this example:

- `promise1` is resolved after 1000 milliseconds with the value `'Promise 1 resolved'`.
- `promise2` is rejected after 500 milliseconds with an error message.
- `Promise.race()` fulfills as soon as one of the promises fulfills or rejects. Since `promise2` rejects before `promise1` resolves, the returned promise rejects with the reason of `promise2`, which is the error `'Promise 2 rejected'`.

### Promise.any():

avaScript's Promise API includes a static method called `Promise.any()`, which returns a single promise that fulfills as soon as one of the promises in the iterable fulfills, or rejects if all of the promises in the iterable reject.

The returned promise settles in one of the following ways:

- If any promise in the iterable fulfills, the returned promise resolves with the value of the first fulfilled promise.
  
- If all promises in the iterable reject, the returned promise rejects with an `AggregateError` containing all rejection reasons.
  

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise2 = Promise.reject(new Error('Promise 2 rejected'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'Promise 3 resolved'));

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log('First settled promise:', result);
  })
  .catch((error) => {
    console.error('All promises rejected:', error);
  });

```

**Output (after 500 milliseconds):**

```javascript
First settled promise: Promise 3 resolved
```

In this example:

- `promise1` is resolved after 1000 milliseconds with the value `'Promise 1 resolved'`.
- `promise2` is rejected immediately with an error message.
- `promise3` is resolved after 500 milliseconds with the value `'Promise 3 resolved'`.
- `Promise.any()` fulfills as soon as one of the promises fulfills, so it resolves with the value of the first fulfilled promise, which is `'Promise 3 resolved'`.


## Callback functions

Callback functions are a fundamental concept in JavaScript, especially when dealing with asynchronous operations. A callback function is:

*function that is passed as an argument to another function and is executed after the completion of that function. In other words, it's a function that is "called back" at a later time.*

### Passing Functions as Arguments:

In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions. This allows you to pass a function as an argument to another function

```javascript
function processData(data, callback) {
  // Do something with the data
  callback(data);
}

function myCallbackFunction(result) {
  console.log("Result:", result);
}

processData("Hello", myCallbackFunction); // passing callbackFunction as an argument

```

### Asynchronous Operations:

Callback functions are commonly used in asynchronous programming to handle operations that take some time to complete, such as fetching data from a server, reading a file, or executing a timeout.

```javascript
function fetchDataFromServer(callback) {
  setTimeout(() => {
    const data = "Data from server";
    callback(data);
  }, 1000);
}

function processData(result) {
  console.log("Data received:", result);
}

fetchDataFromServer(processData);

```

### Error Handling:

Callback functions can also be used to handle errors that occur during the execution of an asynchronous operation.

```javascript
function fetchDataFromServer(callback, errorCallback) {
  setTimeout(() => {
    const error = false; // Simulate an error
    if (error) {
      errorCallback("Error: Unable to fetch data");
    } else {
      const data = "Data from server";
      callback(data);
    }
  }, 1000);
}

function processData(result) {
  console.log("Data received:", result);
}

function handleFetchError(error) {
  console.error(error);
}

fetchDataFromServer(processData, handleFetchError);

```

### Anonymous Functions:

Callback functions are often defined inline as anonymous functions, especially when they're simple and used only once.

```javascript
fetchDataFromServer(
  (result) => {
    console.log("Data received:", result);
  },
  (error) => {
    console.error(error);
  }
);

```

## async function

An async function in JavaScript is a special type of function that allows you to write asynchronous code more elegantly using the `async` keyword. Async functions make it easier to work with asynchronous operations such as fetching data from a server, reading files, or waiting for a timer to complete. Async functions always return a promise, which resolves with the value returned by the function or rejects with an error thrown from within the function.

### Declaring Async Functions:

```javascript
async function myAsyncFunction() {
  // Asynchronous code here
}
```

### Awaiting Promises:

Async functions can contain zero or more `await` expressions. you can use the `await` keyword to pause the execution of the function until a promise settles (either resolves or rejects). This allows you to write asynchronous code that looks and behaves like synchronous code.

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then((data) => {
  console.log(data); // Output: Retrieved data from the API
});

```

### Async Functions and Promise Chaining:

Async functions can be chained together with `then()` just like regular promises, allowing for more concise and readable code.

```javascript
async function getUserData() {
  const userId = await getUserId();
  const userData = await fetchUserData(userId);
  return userData;
}

getUserData()
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });

```

## await

`await` is a keyword in JavaScript used within async functions to pause the execution of asynchronous code until a promise is settled (fulfilled or rejected), and to resume the execution of the async function after the promise is settled, returning the resolved value.

### Used Inside Async Functions:

`await` can only be used inside functions defined with the `async` keyword. An async function implicitly returns a promise, which allows `await` to pause the function's execution without blocking the event loop.

```javascript
async function myAsyncFunction() {
  const result = await somePromiseFunction();
  console.log(result);
}

```

### Pausing Execution:

When `await` is encountered, it suspends the execution of the async function until the promise passed to it is settled. During this time, other code outside the async function can continue to execute.

```javascript
async function example() {
  console.log("Before await");
  await somePromise(); // Execution pauses here until the promise settles
  console.log("After await");
}

example();
console.log("Outside async function");

//Output//
Before await
Outside async function
// Some time later when the promise settles:
After await
```

### Awaiting Promise Resolution:

If the promise resolves, `await` returns the resolved value. If the promise rejects, it throws an error, which can be caught using `try...catch` blocks.

```javascript
async function example() {
  try {
    const result = await somePromiseFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

```

### Awaiting Multiple Promises:

You can use `await` with multiple promises sequentially or concurrently to wait for all of them to settle.

```javascript
async function example() {
  const result1 = await somePromiseFunction1();
  const result2 = await somePromiseFunction2();
  console.log(result1, result2);
}

```

In the above example, `somePromiseFunction2` doesn't start until `somePromiseFunction1` completes because of the sequential nature of `await`. If you want them to run concurrently (at the same time), you can use `Promise.all()`.

### Throw error:

while `try/catch` is the primary mechanism for error handling within async functions, `throw` can be used in conjunction with `try/catch` to provide additional flexibility, such as custom error handling or propagating errors up the call stack.

```javascript
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}

```
