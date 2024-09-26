// Listen for messages from the parent process
process.on("message", (message) => {
  console.log(`Child received: ${message}`);

  // Send a message back to the parent
  process.send("Hello, parent process!");

  // Simulate some work and exit
  setTimeout(() => {
    console.log("Child process done.");
    process.exit(0);
  }, 1000); // Simulate some async work
});
