function employee(param_1,param_2,{}){  // parameters passed during defining
    return {name : param_1,
    age : param_2}
}
const hold = employee("Ravi",21,{})   //arguments are passed during calling
console.log(hold)

// exAMple 2
function greeting(){
    console.log("hello everyone")
}
const user = greeting();
// console.log(typeof user)
console.log(user) // both gives undefined results as no result value

// we can instance of a user defined object for a function using new keyword
const obj = new employee("Yadav",21,{})
console.log(obj)
