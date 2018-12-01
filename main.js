
const greetings = require("./greeting.js");
const translateAndRespond = require('./translate-and-respond.js');

console.log(greetings.greetingEnglish());
translateAndRespond.translateGreeting(greetings.greetingEnglish());
translateAndRespond.rejectGreeting(greetings.greetingEnglish());
console.log("\n");
console.log(greetings.greetingJapanese());
translateAndRespond.translateGreeting(greetings.greetingJapanese());
translateAndRespond.rejectGreeting(greetings.greetingJapanese());
console.log("\n");
console.log(greetings.greetingSpanish());
translateAndRespond.translateGreeting(greetings.greetingSpanish());
translateAndRespond.rejectGreeting(greetings.greetingSpanish());
console.log("\n");
console.log(greetings.greetingIcelandic());
translateAndRespond.translateGreeting(greetings.greetingIcelandic());
translateAndRespond.rejectGreeting(greetings.greetingIcelandic());
