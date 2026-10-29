function arrange(arr){
    const evens=arr.filter(ele => ele % 2==0);
    const odds=arr.filter(ele => ele % 2!=0);
    return {evens,odds};
}
console.log(arrange([10,11,12,13,14]));