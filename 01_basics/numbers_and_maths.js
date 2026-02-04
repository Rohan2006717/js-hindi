const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)

console.log(balance.toFixed(2)); //ouptut results in 100.00 this gives us precision upto two values in the Fixed paranthesis


const otherNUmber = 23.8966
console.log(otherNUmber.toPrecision(2)) // rounds off the number to two digits 


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // gives us the locale specific format of the number

// +++++++++++++++++++++++Maths+++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,34,5,6,7,-1));
console.log(Math.max(2,34,5,6,7,-1));
console.log(Math.random()*10 +1); // produces random number between 1 and 10
console.log(Math.floor(Math.random()*10 +1));
console.log(Math.random()); // produces random number between 0 and 1

const min = 10
const max = 20

console.log(Math.floor((Math.random() *(max-min) + min)))