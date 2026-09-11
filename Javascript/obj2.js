const arr =[1,2,3];
console.log(typeof arr);

const obj ={a:1 , b:2 , c:3 , 'd alpha': 4};
console.log(typeof obj)
console.log(obj);
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(obj.a);
console.log(obj["b"]);
console.log(obj.d);
console.log(obj["d alpha"]);