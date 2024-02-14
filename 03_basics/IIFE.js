// IIFE => Immediately Invoked Function Expression =>  immediately invoked function to avoid global scope pollution by different variables and declarations
// represented by ->  (function definition)(functioncall)

(function greeting(){
    console.log("hello Ravi")
})();         // note : we have to apply semicolon(;) on  all previous IIFE otherwise it willl show error

(function inc(count,incrementer)
{ console.log(count+incrementer)
})(6,2)

const user = ((username) => {console.log(`hello ${username}`)})("rsam")