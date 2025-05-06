//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Outer loop value ${i} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
        
        
    }
}

let myrray = [ "flash" , "batman" , "superman"]
// console.log(myrray.length);

for (let index = 0; index < myrray.length; index++) {
    const element = myrray[index];
    // console.log(element);
}
 
//break and continue
for (let index = 0; index <= 20 ; index++) {
    if (index == 5){
        console.log(`detected 5`);
        // break
        continue
        
    }
    console.log(`value of i is ${index}`);
    
    
}