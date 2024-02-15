// truthy and falsy values are values which is defaultly considered as truth and false value
//falsy values => 0, -0, 0n, "", null, undefined, NaN
// some truthy values => "0", "false", " ",[], {}, function(){}

// const userEnail = "ravi@gmail.com"

// if(userEnail)
// console.log("email logged")
// else
// console.log("email not logged")

// const userEnail = " "

// if(userEnail)
// console.log("email logged")
// else
// console.log("email not logged")

// const userEnail = ""

// if(userEnail)
// console.log("email logged")
// else
// console.log("email not logged")

// for arrays and objects it cannnot be checked directly it can be checkec by some property like length
const userEnail = {}

if(Object.keys(userEnail).length == 0)
console.log("email empty")
else
console.log("email not empty")

// const userEnail = []

// if(userEnail.length == 0)
// console.log("email empty")
// else
// console.log("email not empty")


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++====
// Nullish Coalescing Operator (NCO)=> (??) : generally used for datatypes are null and undefined

let val1 = 5 ?? 10
val1 = null ?? 10    // some times null cause some error or uncertainity in code thats why it is assigned to another provided value
val1 = null ?? 10 ?? 20
console.log(val1)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Terniary operator(?)
 
const price = 100;
price >=80 ?  console.log("price greater than 80") : console.log("price less than 80")