exports.translateGreeting = function(greeting) {
  switch (greeting) {
    case "Hello":
      console.log("English");
      break;
    case "Konichiwa":
      console.log("Japanese");
      break;
    case "Hola":
      console.log("Spanish");
      break;
    case "Hallo":
      console.log("Icelandic");
      break;
    default:
      console.log("Couldn't identify the language!");
  }
}

exports.rejectGreeting = function(greeting) {
  switch (greeting) {
    case "Hello":
      console.log("Goodbye!");
      break;
    case "Konichiwa":
      console.log("Sayanora!");
      break;
    case "Hola":
      console.log("Adios!");
      break;
    case "Hallo":
      console.log("Bless!");
      break;
    default:
      console.log("Couldn't identify the language!");
  }
}
