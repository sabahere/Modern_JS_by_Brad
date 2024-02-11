const os = require("os");

//arch()
console.log(os.arch());

//platform()
console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("You are on a mac");
} else if (os.platform === "win32") {
  console.log("You are on Windows");
} else {
  console.log("You are on Linux");
}

//cpus()
console.log(os.cpus());

//freemem()
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

//Totalmem()
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

//uptime
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const min = Math.floor(uptime / 60) % 60;
const sec = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours}hours, ${min} minutes, ${sec} seconds`
);

//hostname()
console.log(os.hostname());
