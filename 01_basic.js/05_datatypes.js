//primitive 

// 7 types : string, number, boolean , null , undefined, symbol, bigInt

const score =100

//Reference (non primitive)
//Array, objects, function

const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId =Symbol('123')
// console.log(id === anotherId);


// const bigNumber = 23432423432423434234n

// Reference (non primitiver)
// array , object ., function

const heros =["Shaktiman", "naagraj","doga"];
let myObj ={
    name:"chadan",
    age: 22,
}

const myFunction = function(){
    // console.log("hello world");
    
}
// console.log(typeof id )



//++++++++++++++++++++++++++++++++++++++++
// stack (primitive) , Heap (Non-primitive)
let myname = "chadnan kumar"
let anotherName = myname
anotherName = "chadnan sharma"

console.log(myname);
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email="chadnan@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

