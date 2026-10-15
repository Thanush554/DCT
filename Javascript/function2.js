// without using rest parameters

function add(){
    // special obj-arguments
    // console.log(arguments.length,arguments);
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));
console.log(add(10,20,30,40,50));