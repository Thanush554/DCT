// Functional Paradigm

const data=[10,20,30];
function sum(arr){
    let total=0;
    for(let ele of arr){
        total+=ele
    }
    return total;
}
console.log(sum(data));

// OOPs

const obj={
    data:[10,20,30],
    sum:function(){
        let total=0;
        for(let ele of this.data){
            total+=ele;
        }
        return total;
    }
}
console.log(obj.sum());scop