function stringToObjectAndIndex(str){
    const result={};
    for(let i=0;i<str.length;i++){
        const key=str[i];
        if(key in result){
            result[key].push(i)
        }else{
            result[key]=[i];
        }
    }
    return result
}
console.log(stringToObjectAndIndex("ddccdct"));