// some specific loops is present to iterate over an object or array
//1. for of
//2. for in

const arr = [5, 4,  6, 7, 8]
for (const num of arr) {
   console.log(num) 
}

// const user = {
//     name : "ravi",
//     age : 21,
//     gender : "male"
// }

// for (const [key] of user) {
//     console.log(key)
// }
// it shows error as object is not iteratable using for of loop we can iterate over an object using for in loop

// but object wrapper keywords are iteratable using for of loop
let str = new String("ravi")
for (const i of str) {
   // console.log(i) 
}

// MAPS -> it is also a data type object used to store unique key value pairs

const mp = new Map();
mp.set("location", "basti")
mp.set( "pin_code", 272001)
mp.set("item_id", 24)
// console.log(mp)
// console.log(mp.keys())

// for(const [key] of mp){
//     console.log(key)        //this will executed result in form of arrays of key value pair
//    }

// for(const [key] of mp){
//    console.log(key)        //this will give only key values in a map
//   }

for(const [key,value] of mp){
   console.log(`the key is ${key} and its value is ${value}`)        //this will give only key values in a map
  }


// FOR IN LOOP(objects are iteratable using this)

const obj = {
   name : "ravi",
   age : 21,
   gender : "male"
}
for (const key in obj) {
   console.log(key.valueOf())
   
}