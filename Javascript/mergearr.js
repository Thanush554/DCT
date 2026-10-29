function mergeArr(arr1,arr2){
    // using concat
    // const result=arr1.concat(arr2);
    // return result;

    // using spread
    const result1=[...arr1,...arr2]
    return result1;
}
console.log(mergeArr([1,2,3],[4,5]));