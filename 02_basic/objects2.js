// singleton -> with help of constructor function
const obj1 = new Object();  // singleton
const obj2 = {}              //non singleton
obj1.name = "ravi"
obj1.age = 21
obj1.email = "ravi@gmail.com"
// console.log(obj1)

//nesting objects
const obj = {
    name : {
        fullName : {
            firstName : "ravi",
            lastName : "tripathi"
        }
    },
    age : 21
}
// console.log(obj.name.fullName)

// merging objects
const obj3 = { 1: "a", 2: "b"}
const obj4 = { 3: "a", 4 : "b"}
// const obj5 = {obj3 , obj4}
// console.log(obj5);
// const obj5 = Object.assign(obj3,obj4)
// console.log(obj5);

const obj5 = {...obj3,...obj4}
// console.log(obj5)

//  objects in form of arrays
const arr = [{},{ },{}]
console.log(Object.keys(obj1));
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

console.log(Object.hasOwnProperty("name"));