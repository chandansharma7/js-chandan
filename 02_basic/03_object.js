//singleton
 //object literals

 const mySym = Symbol("Key1")
 const jsuser ={
    name:"chandan",
    "fullName":"chandan kumar",
    [mySym] :"mykey1",
    mySym :"mykey1",
    age: 18,
    location : "noida",
    email : "chandan@gmail.com",
    isLosggedIn: false,
    lastlogIn: ["monday", "satuday"]
}
// console.log(jsuser.age);
// console.log(jsuser.mySym);
// console.log(jsuser["fullName"]);

//value change

jsuser.email ="chandankumar@gmail.com"
// Object.freeze(jsuser) //this is used for frezee object if you use this when you wants to change anything than not changes
jsuser.email ="chandankumarsh@gmail.com"
// console.log(jsuser.email);
// console.log(jsuser);


jsuser.greeting =function () {
    console.log("hello js user");
    
}
jsuser.greetingTwo =function () {
    console.log(`hello ${this.name}js user`);
    
}
 
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
