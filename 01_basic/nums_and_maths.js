const nme = new String('ravi')
console.log(nme)        // new keyword are used to create an instance of user defined object or builtin object of those having some constructor function    
// example 1
// some costructor functions are
// console.log(nme.toUpperCase())
// console.log(nme.length)

// let some_num = new Number(2008798998)
// console.log(some_num)
// console.log(some_num.toLocaleString('en-IN'))

// //example 2
// const f = function(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const x = new f('ravi', 21, 'male')
// const y = f('subham', 21, 'male')
// console.log(x)
// console.log(y) 
 

//  ++++++++++++++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-200))
console.log(Math.ceil(6.35))
console.log(Math.round(4876576.348))

//the best use of math is in selecting random number 
console.log(Math.random()) // gives random values between 0 and 1
console.log(Math.floor(Math.random()*10 +1))
console.log(Math.floor(Math.random()*(20 - 10 +1) +10)) // to obtain value between max(20) and min(10) given value.