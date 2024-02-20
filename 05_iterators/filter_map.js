const arr = ["name","age", "gender","address"]
const x = arr.forEach((arr) => {console.log(arr + "s")})
// const y = arr.forEach((arr) => (arr+ "s"))   // it does not return any value or statement
// console.log(y)      

// filter
const arr1 = [1, 3, 5, 6, 7, 9]
const y = arr1.filter((num) => (num > 6))   // it returns statement or values in a condition 
console.log(y)

const  z = arr.filter((nums)=> {nums > 6})  // as we know from earlier practicals that if we use {} we have to use return keyword to return any value unless it return an empty object.
console.log(z)

// map
const m = arr1.map((arr) => ( arr +2))
console.log(m)
const n = arr.map((nums)=> nums + "s")
console.log(n)

//chaining -> in chaining method we use a series of these methods mutiple times
// ex : arr.map().map().filter()
const user = ["ravi",21, "male", "student"]
const l = user.map((abr) => abr + "=> Accepted").map((abr) => abr + " as id").filter((abr) => (abr.length<3))
console.log(l)
