/*
there are two type of memory stack and heap 

stack -  used by the premetive data type 
heap - used by the none premetive data type 
*/
let myname = "myname is dhanji rai";
let anothername = myname;

anothername = "dhanji rai";
console.log(myname)

console.log( anothername );

let userone={    // this is the way to declare a object 
    email :"Dhanjitrai12@gmail.com",
    upi : "123@ybl",
}
let usertwo = userone
userone.email = "raghav@gmail.com"// this way we can chage the object 
console.log(userone.email) //this is the way to access tha object component 
console.log(usertwo.email)       


