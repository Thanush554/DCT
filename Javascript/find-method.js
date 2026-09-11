function findbig(arr){
    const result=arr.find(ele => {
        return ele >=25;
    });
    return result;
}
console.log(findbig([10,20,30,40]));