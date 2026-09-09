function namesuppermap(strArr){
    const result=strArr.map(function(ele){
        return ele.toUpperCase();
    });
    return result;
}
console.log(namesuppermap(["ravi","kavi","adithya"]));