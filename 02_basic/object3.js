// destructuring of object keys
const obj1 = {
    name : "Ravi Shankar Tripathi",
    age : 21,
    email : "ravi@gmail.com ",
    isLoggedIn : true
}
console.log(obj1.email)
const {email} = obj1  // destructuring
console.log(email)

const {email : e} = obj1 // destructuring
console.log(e)

// api representation in json format
// in object form
// { 
//    "x" : "y"
// }

// in array form 
// [
//     {},
//     {},
//     {}
// ]