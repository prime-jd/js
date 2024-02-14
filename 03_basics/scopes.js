// In js scopes can whether be local or global
let name = "Ravi"
const isLogged = true;
var age = 21;

function user(){   // functional scope
    let name1 = "sam"
    var age = 23
    console.log(`${name1} age is ${age}`) 
    console.log(`${name} age is ${age}`) // {name} can be used by function user because it is defined globally 
}
user(); // that's why var keyword not used in several cases because it is independent of any restrictions of any block or functional scopes
// console.log(name1) // the value undefined as {name1} is defined in local scope of user func hence it cannot be accessed out of scope

// nested scope +++++++++++++++++++++++++++++++++++++++++++++++++++++(closure intro)

function one(){
        let x = "ravi"
        function two(){
            let y = "sam"
            console.log(x)
        }
        // console.log(y)
        two()
}
one()


// Hoisting (intro)++++++++++++++++++++++++++++++++++++++++++++++++
console.log(sum1(3)); // function can be called before initialization
function sum1(count){
    return count+1;
}
// console.log(hold(4)) // expression cannot be accesssed or called before initialization
const hold = function sum2(count){
    return count+2;
}

