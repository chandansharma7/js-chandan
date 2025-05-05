const user ={
    username : "chandan",
    price: 1200,
    welcomceMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomceMassage()
// user.username ="marco"
// user.welcomceMassage()

// console.log(this);


// function something (){
//     console.log(this);
    
// }
// something()

// const  something = function(){
//     let username = "chandan"
//     console.log(this.username);
    
// }
// something()

            //  #this is arrow funtion 


// const  something = ()=>{
//     let username = "chandan"
//     console.log(this.username);
    
// }
// something()

// const addTwonumer = (num1, num2)=>{
//     return num1 +num2
// }
// console.log(addTwonumer(1,2));


// const addTwonumer = (num1, num2)=>  num1 +num2
const addTwonumer = (num1, num2)=>  (num1 +num2)
    

console.log(addTwonumer(1,2));

