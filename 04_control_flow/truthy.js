const userEmail = []
if (userEmail){
    console.log("got user email");
    
} else{
    console.log("dont have user email");
    
}

// falsy values
// false , 0 , -0, bigInt on , "" , null , undefined , NaN

// truthy values
// true , [] , "0" ,"false" , {} , function(){} ,

// if (userEmail.length === 0 ){
//     console.log("array is empty");
    
// }


// const emptyObj ={}
// if (Object.keys(emptyObj).length === 0 ){
//     console.log("object is empty");
    
// }

// Nullish coalescing Operatot (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 20 

console.log(val1);


//Terniary operator
// condition ? true : false

const iceTeaprice =100
iceTeaprice <= 80 ? console.log("less than 80"): console.log("more than 80");

