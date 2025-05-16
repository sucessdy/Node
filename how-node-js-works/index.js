const fs = require("fs");
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 10;
const startTime = Date.now();
setTimeout(() => console.log("calling from setTimeout"), 0);

setImmediate(() => console.log("calling from setImmediate"));
fs.readFile("sample.txt", "utf-8", () => {
  console.log("POLLING OPERATION");

  setTimeout(() => console.log("SetTimeout 2"), 0);
  setTimeout(() => console.log("SetTimeout 3 "), 5 * 1000);

  setImmediate(() => console.log("calling from setImmediate  2"));

  // CPU intensive work

  crypto.pbkdf2("password", "salt01", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 1");
  });

  crypto.pbkdf2("password", "salt02", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 2");
  });

  crypto.pbkdf2("password", "salt03", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 3");
  });
  crypto.pbkdf2("password", "salt04", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 4");
  });
  crypto.pbkdf2("password", "salt05", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 5");
  });
  crypto.pbkdf2("password", "salt06", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - startTime}ms`, "PAssword 6");
  });
}); // maybe its take time to read file, cuz file can be a 1GB this will be expensive for us...

console.log("Top level code");
