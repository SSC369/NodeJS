const event = require("node:events");

const eventEmitter = new event();

eventEmitter.on("connect", (message) => {
  console.log(message);
});

eventEmitter.emit("connect", "Event is triggered");
