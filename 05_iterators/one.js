//for loop

const user = "ravi"
for (let i = 0; i < user.length; i++) {
    console.log(user[i])
    
}

//while loop

let i =0 ;
while(i<user.length){
   console.log(user[i])
   i++;
}

//do_while loop

let j = 0;
do{
    console.log(user[j])
    j++;
}while(j<user.length)

// nested for loop

for (let i = 0; i < 5; i++) {
    console.log("value after loop 1")
    for (let j = 0; j < 5; j++) {
        console.log("loop after first")
        
    }
}