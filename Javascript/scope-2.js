function frequency(str){
    const result={};
    for(let ch of str){
        if(ch in result){
            result[ch]+=1;   
        }else{
            result[ch]=1;
        }
    }
    return result;
}
console.log(frequency('ddccdct'));

function unpack(obj){
    let result="";
    for(let key in obj){
        // result+=key.repeat(obj[key]);   -->  using repeat method
        for(let i=1;i<=obj[key];i++){
            result+=key;
        }
    }
    return result;
}
console.log(unpack({a:3,b:2,c:1}))