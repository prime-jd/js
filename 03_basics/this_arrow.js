// This keyword(This) -> this keyword gives information about current context

const user = { username : "Ravi",
            age : 21,
            greeting : function(){
                console.log(`hello ${this.username}`)
                console.log(this)
            }
}
user.username = "sam"
// user.greeting();
// console.log(this)  // alone refers to empty or global object but in browser alone this refers to window object

// console.log(this.username) // cannot access out of object

function one(){
    let user1 = "varunn"
    // console.log(this);                   // it returns some value refervto object window
    // console.log(this.user1);  //  returns undefined
    
}
one();

// arrow function +++++++++++++++++++++++++++++++++++++++++++
// function two(count){
//     return count+2;
// }

// const two = (count) => { return count+2}
const two = (count) => ( count+2 )


console.log(two(6));