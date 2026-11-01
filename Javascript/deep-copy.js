let arr=[1,2,{x:3}];
// let copy=[...arr];  // want copy variable to have the initial value same as arr,but should be distict
// console.log(arr,copy);
// copy.push(4);
// console.log(arr,copy);
// copy[2].x=99;
// console.log(arr,copy);

//  using deep-copy
const copy=structuredClone(arr);
console.log(arr,copy);
copy[2].x=99;
console.log(arr,copy);