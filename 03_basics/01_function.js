function symyname(){
    console.log("c");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("n");
    
}
// symyname()
// function addTwoNumber (number1 , number2){
//     console.log(number1+number2);
    
// }
// addTwoNumber(1,2)
function addTwoNumber (number1 , number2){
    // let result1 = number1 + number2
    // return result1
    
    return number1+number2
}
const result1 = addTwoNumber(2,4)
// console.log("result :" , result1);


function loginUsermessage(username = "chandan"){
    if (username === undefined){
        console.log("please enter the user name");
        return
    }    
    return `${username} just logged in `
}
// console.log(loginUsermessage("chandan"))
// console.log(loginUsermessage("sharma"))

function calculatecarPrice (val1 , val2 , ...num1){
    return num1
}
// console.log(calculatecarPrice(22 , 33, 55));

const user ={
    username:"chandan",
    prices: 200
}
function handaleObject(anyobject){
    console.log(`usernme is ${anyobject.username}and price is ${anyobject.price}`);
    
}
// handaleObject(user)
handaleObject({
    username:"marco",
    price:399
})
const myNewArray = [200,300,400]
function returnsecondValue (getArray){
    return getArray [1]
}
console.log(returnsecondValue(myNewArray));
