// A closure in JavaScript is a powerful concept that allows a function to access variables from its outer (enclosing) function even after the outer function has finished executing. In other words, a closure gives a function access to its own scope, the scope of the outer function, and the global scope.

// How Closures Work:
//1) When a function is created in JavaScript, it forms a closure.
//2) This closure is a combination of the function and its lexical environment, which consists of any variables that were in scope at the time the function was created.
// 3) Even after the outer function has returned, the inner function retains access to these variables.

//Example-1
// function outerFunction() {
//   let outerVariable = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVariable); // Accessing the outer variable
//   }

//   return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction(); // Output: "I am from the outer function"

// Explanation:
// outerFunction: This is the outer function that declares a variable outerVariable and defines an inner function innerFunction.
// innerFunction: This inner function has access to outerVariable because of the closure.
// Closure: Even after outerFunction has finished executing and returned innerFunction, the innerFunction still retains access to outerVariable. When closureFunction (which is innerFunction) is called later, it can access outerVariable and log its value.

// Practical Uses of Closures:

// 1. Data Encapsulation:
//    - Closures can be used to create private variables in JavaScript, providing a way to encapsulate data and prevent it from being accessed directly from outside the function.

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3

// 2. Creating Function Factories:
//    - Closures can be used to create functions that are customized by the arguments passed to the outer function.

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// 3. Maintaining State in Asynchronous Code:
//    - Closures are useful in asynchronous code, where you need to remember the state or variables at the time of the function's creation.

// function createTimers() {
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// createTimers();

// Outputs: 1 (after 1 second), 2 (after 2 seconds), 3 (after 3 seconds)

// Key Points to Remember:
// - Lexical Scope: Closures are created based on the lexical scope of the function, meaning the scope is determined by the position of the function in the source code.
// - Memory Management: Since closures maintain references to their outer scope variables, they can sometimes lead to increased memory usage if not managed properly.

// Closures are an essential part of JavaScript programming, enabling powerful patterns like data encapsulation, function factories, and maintaining state in asynchronous operations.
