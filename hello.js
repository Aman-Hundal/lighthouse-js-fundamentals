// function expression
const sayHello = function (name) {
  console.log(`Hello ${name}`);
}

sayHello("Amo");
sayHello("Miranda");
sayHello("Ferdinand");

// normal function
function sayHola (name) {
  console.log(`Hola ${name}`);
}

sayHola("Amo");


//Return vs Console.log (print)
const sayHelloToConsole = function(name) {
  console.log("Hello " + name);
}
sayHelloToConsole('John');

const returnSayHello = function(name) {
  return "Hello " + name;
}
let greeting = returnSayHello('Johnny')
// console.log(greeting)