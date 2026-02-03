const name = "Rohan"
const repoCount = 50
// console.log(name + repoCount + " Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohanfc')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('f'))

const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-4,4); // peeche se start krega or 4 tk jayega and then index 4-1 tk krega
console.log(anotherString)
const newStringOne = "   rohan      "
console.log(newStringOne)
console.log(newStringOne.trim())
const url = "https://rohansingh.com/rohan%20singh"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
const gameNamenew = "rohan-fc-madrid"
console.log(gameNamenew.split('-'))