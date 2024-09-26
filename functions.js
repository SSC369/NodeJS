//bind in function

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this);
    const innerArrowFunction = () => {
      console.log(this); //  console.log(this); inside innerArrowFunction logs the member object because this was lexically inherited from the bound fullName function.
    };
    innerArrowFunction();
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

//case 1
person.fullName(); // here function is called as an object function so here Arrow functions have a lexical this, meaning they inherit this from the surrounding (outer) context where they are defined. output: { firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }

//case 2
let fullName = person.fullName;
// fullName();  //here fullname function is called in the context of global like standalone , so arrow function inherits this from global object

// First Case (person.fullName()): this refers to the person object because the method is called on person.
// Second Case (fullName()): this refers to the global object because the method is called as a standalone function, not as a method of person. The arrow function inherits this from the context in which fullName was called, which is the global object in this case.

// now let's come dive into bind function
fullName = person.fullName.bind(member); // bind(member) creates a new function where this is set to member object.
fullName(); // output: { firstName: 'Hege', lastName: 'Nilsen' }

// apply in function

// function func(a, b, c) {
//   console.log(this);
//   console.log(c);
// }

// func.apply({ name: "sai" }, [1, 2, 3]);

// In JavaScript, `call()`, `apply()`, and `bind()` are methods that allow you to set the value of `this` within a function and control how the function is executed. Here’s a detailed comparison of these methods:

//  1. `call()`

// - Purpose: Immediately invokes a function with a specified `this` context and individual arguments.
// - Syntax: `function.call(thisArg, arg1, arg2, ...)`
// - Usage: Useful when you want to call a function immediately with a specific `this` value and pass arguments individually.

//  2. `apply()`

// - Purpose: Immediately invokes a function with a specified `this` context and arguments provided as an array (or array-like object).
// - Syntax: `function.apply(thisArg, [arg1, arg2, ...])`
// - Usage: Useful when you want to call a function immediately with a specific `this` value and pass arguments as an array.

//  3. `bind()`

// - Purpose: Creates a new function with a specified `this` context and optional initial arguments, but does not immediately invoke it. The new function can be called later with additional arguments.
// - Syntax: `function.bind(thisArg, arg1, arg2, ...)`
// - Usage: Useful when you need to create a new function with a specific `this` value and optionally preset arguments, which can be called later.

// Example:

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Alice" };
// const greetAlice = greet.bind(person, "Hello");
// greetAlice("!"); // Output: "Hello, Alice!"

//  Summary of Differences

// 1. Invocation:
//    - `call()`: Immediately calls the function with a specified `this` value and individual arguments.
//    - `apply()`: Immediately calls the function with a specified `this` value and arguments as an array.
//    - `bind()`: Creates a new function with a specified `this` value and optional initial arguments, which can be called later.

// 2. Arguments Handling:
//    - `call()`: Accepts arguments individually after `thisArg`.
//    - `apply()`: Accepts arguments as an array (or array-like object) after `thisArg`.
//    - `bind()`: Accepts initial arguments which will be prepended to the arguments passed when the bound function is called.

// 3. Function Execution:
//    - `call()` and `apply()`: Execute the function immediately.
//    - `bind()`: Returns a new function that can be called later.

// These methods are essential for manipulating the `this` context in JavaScript functions and are useful for various scenarios, including function borrowing, partial application, and function chaining.

// this in functions with different contexts in which it is being used

// In JavaScript, the value of `this` inside a function depends on how the function is called. Here's an overview of the different scenarios:

//  1. Global Context or Simple Function Call
//    - In the global context (outside of any function), `this` refers to the global object. In browsers, this is the `window` object.
//    - Inside a function (in non-strict mode), if the function is called as a simple function, `this` also refers to the global object (`window` in browsers).

// console.log(this); // In global scope, `this` refers to `window`

// function show() {
//   console.log(this); // In a simple function call, `this` refers to `window` (non-strict mode)
// }

// show.apply(); // Output: window object
// show.apply({}); //output: {}

//  2. Strict Mode
//    - When a function is executed in strict mode (`'use strict';`), `this` is `undefined` in simple function calls.
//    - This helps avoid common mistakes and potential bugs.

//    'use strict';

//    function show() {
//      console.log(this); // In strict mode, `this` is `undefined`
//    }

//    show(); // Output: undefined

//  3. Method Call
//    - When a function is called as a method of an object, `this` refers to the object that the method is a property of.

//    const person = {
//      name: 'Alice',
//      greet: function() {
//        console.log(this.name); // `this` refers to `person` object
//      }
//    };

//    person.greet(); // Output: "Alice"

//  4. Constructor Function (with `new`)
//    - When a function is used as a constructor (called with the `new` keyword), `this` refers to the new object being created.

//    function Person(name) {
//      this.name = name; // `this` refers to the new object
//    }

//    const alice = new Person('Alice');
//    console.log(alice.name); // Output: "Alice"

//  5. Arrow Functions
//    - Arrow functions have a lexical `this`, meaning they inherit `this` from the surrounding (outer) context where they are defined.
//    - They do not have their own `this`, so they are useful when you want `this` to refer to the outer scope.

//    const person = {
//      name: 'Alice',
//      greet: function() {
//        const arrowFunction = () => {
//          console.log(this.name); // `this` refers to `person`, the outer context
//        };
//        arrowFunction();
//      }
//    };

//    person.greet(); // Output: "Alice"

//  6. Event Handlers
//    - In event handlers, `this` refers to the element that received the event.

//    const button = document.querySelector('button');

//    button.addEventListener('click', function() {
//      console.log(this); // `this` refers to the button element
//    });

//  7. Using `call()`, `apply()`, and `bind()`
//    - You can explicitly set `this` using `call()`, `apply()`, or `bind()`.

//    function show() {
//      console.log(this.name);
//    }

//    const person = { name: 'Alice' };

//    show.call(person); // `this` is set to `person`, Output: "Alice"

//  8. In a Class Method
//    - Inside a class, `this` refers to the instance of the class.

//    class Person {
//      constructor(name) {
//        this.name = name;
//      }

//      greet() {
//        console.log(this.name); // `this` refers to the instance of the class
//      }
//    }

//    const alice = new Person('Alice');
//    alice.greet(); // Output: "Alice"

//  Summary:
// - `this` refers to different objects depending on how the function is called.
// - In global scope or a simple function call, `this` usually refers to the global object (`window` in browsers).
// - In strict mode, `this` is `undefined` in simple function calls.
// - As a method, `this` refers to the object the method belongs to.
// - With `new`, `this` refers to the newly created object.
// - In an arrow function, `this` retains the value from the surrounding lexical context.
// - Event handlers refer to the element that received the event.
// - You can explicitly set `this` using `call()`, `apply()`, or `bind()`.
