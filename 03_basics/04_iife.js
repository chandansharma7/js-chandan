// Immediately Invoked Function Expressions (IIFE)

(function vodka(){
    console.log(`DB connected`);
    
})();

(function aurcode(){
    console.log(`DB connected two`);
    
})();

((name)=>{
    console.log(`Db connected two ${name}`);
    
})("chandan")