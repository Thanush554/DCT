// pass by value
let a=10,b=20;
function add(a,b){
    a=100;
    b=200;
    return a+b;
}
console.log(add(a,b)); // 300
console.log(a,b); // 10 20