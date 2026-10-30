// pass by value
                
let a=10,b=20;
function add(a,b){
    a=100;
    b=200;
    return a+b;
}
console.log(add(a,b)); // 300
console.log(a,b); // 10 20

// pass by reference

const fruits=["mango","orange"];
const name="apple";
function addFruits(fruits,name){
    fruits.push(name);
    return fruits;
}
console.log(addFruits(fruits,name)); //[ 'mango', 'orange', 'apple' ]
console.log(fruits); //[ 'mango', 'orange', 'apple' ]
console.log(addFruits(fruits,name));  //[ 'mango', 'orange', 'apple', 'apple' ]