let myarr1 = [1,3,24,45,6,"ravi"]
let myarr2 = [5,7,4,6,7,5,"shubham"]
// joining two arrays
//1.
// myarr1.push(myarr2)
// console.log(myarr1); // it is bad merging method 
//2. 
// let myarr = myarr1.concat(myarr2)
// console.log(myarr)

//3.
// let myarr = [...myarr1,...myarr2]
// console.log(myarr)
 
// let myarr = [3,4,5,6,[4,6,5,6,],[6,4,5]]
// console.log(myarr.flat(Infinity))
 
console.log(Array.isArray("ravi"))
console.log(Array.from("ravi"))
console.log(Array.of("ravi","shankar","tripathi"))
