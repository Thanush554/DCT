// copy by value

let n=10;
let m=n;
console.log(n,m); //10 10
n=20;
console.log(n,m); //20 10
m=100;
console.log(n,m); //20 100

let arr1=[10,20];
let arr2=arr1;
console.log(arr1,arr2); //[10,20] [10,20]
arr1.push(30);
console.log(arr1,arr2); //[10,20,30] [10,20,30]
arr2.pop();
console.log(arr1,arr2); //[10,20] [10,20]