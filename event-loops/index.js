// console.log(1);
// process.nextTick(() => {
//   console.log(2);
// });
// console.log(3);

//By event loop gives all callbacks in the nextTick queue priority are executed before promise queue

// Promise.resolve().then(() => console.log("this is promise"));
// process.nextTick(() => {
//   console.log("This is nextTick");
// });
// console.log(1);
// console.log(2);
//Output:
// 1
// 2
// This is nextTick
// this is promise

//3
//Call backs in the micro tasks queue are executed before callbacks in the timer functions
// setTimeout(() => console.log("this is timeout callback"), 0);
// Promise.resolve().then(() => console.log("this is promise"));
// process.nextTick(() => {
//   console.log("This is nextTick");
// });
// console.log(1);
// console.log(2);
//Output:
// 1
// 2
// This is nextTick
// this is promise
// this is timeout callback

//4

//callbacks in micro tasks queue are executed in between the execution of callbacks of timers.
// setTimeout(() => console.log("this is timeout callback 1"), 0);
// setTimeout(() => {
//   console.log("this is timeout callback 2");
//   process.nextTick(() =>
//     console.log(
//       "this is nextTick inside of timer, which runs in between execution of timer callbacks"
//     )
//   );
// });
// setTimeout(() => console.log("this is timeout callback 3"), 0);

// Promise.resolve().then(() => console.log("this is promise 1"));
// Promise.resolve().then(() => {
//   console.log("this is promise 2");
//   process.nextTick(() =>
//     console.log(
//       "this is nextTick inside of promise, which runs after execution of all promise callbacks"
//     )
//   );
// });
// Promise.resolve().then(() => console.log("this is promise 3"));

// process.nextTick(() => {
//   console.log("This is nextTick");
// });
// console.log(1);
// console.log(2);
//Output:
// 1
// 2
// This is nextTick
// this is promise 1
// this is promise 2
// this is promise 3
// this is nextTick inside of promise, which runs after execution of all promise callbacks
// this is timeout callback 1
// this is timeout callback 2
// this is nextTick inside of timer, which runs in between execution of timer callbacks
// this is timeout callback 3

//6
//Callbacks in the microtasks queue and in the timer queue are executed before callback in the I/O queue

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("file");
// });

// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// process.nextTick(() => {
//   console.log("nextTick");
// });

// console.log(1);

//Output
// 1
// nextTick
// promise
// timeout
// file

//7
//I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("file");
//   setImmediate(() => {
//     console.log("Immediate");
//   });
// });

// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// process.nextTick(() => {
//   console.log("nextTick");
// });

// console.log(1);
//output:
// 1
// nextTick
// promise
// timeout
// file
// Immediate

//

const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("file");

  setImmediate(() => {
    console.log("inner Immediate");
  });
  setTimeout(() => console.log("Inner timeout"), 0);
  Promise.resolve().then(() => console.log("Inner promise"));
  process.nextTick(() => console.log("inner nextTick"));
});

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => {
  console.log("nextTick");
});
console.log(1);
//Output:
// 1
// nextTick
// promise
// timeout
// file
// inner nextTick
// Inner promise
// inner Immediate
// Inner timeout
