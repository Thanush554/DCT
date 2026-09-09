const names=["virat","rohit","shikar"];
names.forEach(function(ele,i){
    console.log(`names: ${ele} index: ${i}`);
})

// const prices=[10,20,30];
// let sum=0;
// prices.forEach(function(n){
//     sum+=n;
// });
// console.log(sum);

// using arrow function

const amount=[10,20,30];
let add=0;
amount.forEach((n)=>{
    add+=n;
});
console.log(add);
