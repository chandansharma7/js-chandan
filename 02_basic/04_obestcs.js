const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name="chandan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regulerUser ={
    email : "chandan@gmail.com",
    fullname:{
        userFullname:{
            firstname:"chandan",
            lastname:"kumar"
        }
    }
}
// console.log(regulerUser.fullname.userFullname.firstname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}

const users = [
    {
        id:1,
        email : "chandan@gmail.com",
    },
    {
        id:1,
        email : "chandan@gmail.com",
    },
    {
        id:1,
        email : "chandan@gmail.com",
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged')); // this property used for to chek keys are available or not 

const course ={
    coursename: "js in hinde",
    price:"999",
    courseInsetructor:"chandan"
}
// course.courseInsetructor
const{courseInsetructor} = course
console.log(courseInsetructor);

