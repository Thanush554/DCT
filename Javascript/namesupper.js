function namesupper(strArr){
    const result=[];
    strArr.forEach((element) => {
        result.push(element.toUpperCase());    
    });
    return result;
}
const result=namesupper(["ravi","kavi","adithya"]);
console.log(result);