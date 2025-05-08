const mynumbers = [1,2,3,4,5,6,7,8]
// const newNums = mynumbers.map((num)=>num+ 10)

const newNums = mynumbers
                .map((num)=> num *10) 
                .map((num)=> num +1)
console.log(newNums);
