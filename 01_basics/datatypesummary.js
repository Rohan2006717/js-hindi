// Primitve 

//7types: String, Number , Boolean , null, undefined,Symbol,BigInt

const score = 100
// JavaScript is dynamically typed.(That means you don’t declare a variable’s data type in advance — the type is decided at runtime and can even change later.)
/**
 * Statically Typed	Dynamically Typed
When type is checked	Compile time (before program runs)	Runtime (while program runs)
Do you declare types?	Yes	                                No
 */
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 3454646453434353534n // n is for representing big int


//Reference (Non Primitve)

// Array , Objects , Functions

const heros = ["shaktiman", " nagraj", "doga"]
let myObj = {
    name : "Rohan",
    age : 19,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof(myObj))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitve) , Heap (Non Primitve)
let myYoutubename = "rohansingh"
let anothername = myYoutubename
anothername = "chaiaurchode"

console.log(myYoutubename) // Even though we gave reference of myYoutubename to anothername it did not change thats why stack structure(pass by value)
console.log(anothername)

let user1 = {
    email : "user@gmail.com",
    upi: "user@ybl",
}
let user2 = user1
user2.email = "rohan@google.com"

console.log(user1.email) // here the value is changed as this is heap which is pass by reference (ie if changed in reference one original one also changes)
console.log(user2.email)
