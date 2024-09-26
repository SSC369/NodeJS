const { fork } = require("child_process");

// Fork a new child process
const child = fork("./child");

// Send a message to the child process
child.send("Hello, child process!");

// Listen for messages from the child process
child.on("message", (message) => {
  console.log(`Parent received: ${message}`);
});

// Handle child process exit
child.on("exit", (code) => {
  console.log(`Child process exited with code ${code}`);
});

//In Node.js, fork refers to the creation of a new child process that runs a separate instance of the Node.js engine. It's part of the child_process module and is commonly used for parallel execution of tasks and multi-process architectures.

//Key Points:
//Separate Process: When you fork, a new Node.js process is created, running independently of the parent process. This allows you to utilize multiple CPU cores, since Node.js is single-threaded by default.

//IPC Communication: Forked processes have a special communication channel with the parent process via Inter-Process Communication (IPC), enabling them to send and receive messages (e.g., using process.send() and process.on('message')).

//Use Case: Forking is useful for task parallelization, like handling computationally intensive tasks, or building multi-core server applications where each core runs a separate Node.js instance.

//Cluster Module: The cluster module in Node.js also utilizes fork to create worker processes, which is common for building scalable servers.

// Why Use Fork?
// Parallel Execution: Offload CPU-bound tasks to child processes, avoiding blocking the event loop.
// Scalability: Handle large-scale applications by distributing load across multiple Node.js instances.
