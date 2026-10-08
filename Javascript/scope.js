const msg="hello";
console.log(msg);

function greet(name){
    const msg="ola";
    var resultStr=msg + " " + name;
    return resultStr;
}
console.log(greet("adam"));