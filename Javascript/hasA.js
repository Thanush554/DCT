function hasA(strArr){
    const result=strArr.filter(ele =>{
        return ele.includes("a");
    });
    return result;
}
console.log(hasA(["sara","adam","nick"]));