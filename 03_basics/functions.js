// function employee(param_1,param_2,{}){  // parameters passed during defining
//     return {name : param_1,
//     age : param_2}
// }
// const hold = employee("Ravi",21,{})   //arguments are passed during calling
// console.log(hold)

// // exAMple 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function greeting(){
//     console.log("hello everyone")
// }
// const user = greeting();
// // console.log(typeof user)
// console.log(user) // both gives undefined results as no result value

// we can instance of a user defined object for a function using new keyword
// const obj = new employee("Yadav",21,{})
// // console.log(obj)


// difference types of function definition methods
// 1st Method
function user1(name,age){
    
    console.log(`${name} has age ${age}`)
}
user1("Ravi", 21);

//  2nd method (we also call it as expression this method is quite different from previous method)
const user2 = function sum(a ,b){
    return a+b;
}

//3rd method is arrow method in next module



// console.log(sum(2+3)) 
//  (it cannot be called like this because because sum is defined in variable  )
console.log(user2(2,5))

