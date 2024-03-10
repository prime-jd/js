// control flow => statements that manipulate the proper execution of code by introducing some condition or high priority code
// some control flow statements are if,if_else,nested if_else , switch and loops .
// if
const user = "ravi"
if(2==2){
    console.log("ravi is right")
}
//if_else
if(user == "ravi"){
    console.log("ravi accessed")
}
else{
    console.log("ravi not accessed")
}

// nested if_else
const balance = 500;
if(balance>100){
    console.log("balance greater than 100")
    if(balance>200){
        console.log("balance greater than 200")
    }
    else{
        console.log("balance greater than or equal to 1000")
    }
}
// multiple statement or conditions check by using logical operators and using some comparison operators
//(<, >, >=, <=, ==, ===, !=, !==) 
// logical operators used are (&& , || (and ,or))
if(user == "ravi" && balance == 500){
    console.log("jai shree ram")
}
if(user == "sam" || balance == 500){
    console.log("jai bajrangbali")
}

// === operator   // checks equality & with their datatypes
if("2" === 2)
console.log("true")
else
console.log("false")  //false