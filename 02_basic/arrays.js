// let arr = [1,2,4,5,6,5,4,3 , "ravi"] // datatypes can be heterogenous
let arr1 = [1,2,4,5,6,5,4,3] // on copying an array it forms shallow copies rather than deep copies .
// shallow copies means have same reference point while deep copies have copy of original array.

const myarr = new Array(1, 2, 3, 4, 5)
console.log(myarr[0])
myarr.push(6)
console.log(myarr);
myarr.pop()
console.log(myarr);

myarr.shift();
console.log(myarr);
myarr.unshift(1);
console.log(myarr);
console.log(myarr.includes(9))
console.log(myarr)

console.log(myarr.join()) // converts to string

// slice and splice
console.log(myarr.slice(1,4)) // it copies value of array from start to end index excluding max index and do not manipulate original array
console.log(myarr)

console.log(myarr.splice(1,4)); // it cut the portion of array including max index and manipulate original array
console.log(myarr)

