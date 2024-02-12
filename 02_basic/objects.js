//  object can be represented as 
// 1.singleton
// 2.object literals
// here we discuss second form

let sym = Symbol("key1")
let obj1 = {
    name : "ravi",
    "full Name" : "ravi shankar tripathi",
    age : 21,
    email : "ravi@google.com",
    [sym] : "key",
    greeting : function(){
               console.log("hello obj1")
               }
}
//  access methods
console.log(obj1.name) // but sometimes it does not work if key is written as string in ("abc bd"), or  in symbols access,
console.log(obj1["full Name"])
console.log(typeof obj1[sym])
obj1.greeting()
console.log(obj1.greeting)
