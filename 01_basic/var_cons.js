const pass = "ram"
var age =45
let gender = "male"
salary = 200000
console.table([pass ,typeof(age), gender,salary])
// not use var because of block scope and functional scope // 

// pass = "shyam" not applicable // 
age = "46" // datatype automatically changes on redeclaration
gender = "trans"
salary = 10000
console.table([pass ,typeof(age), gender,salary])