function repeatedcharacter(str){
    const result=[]
    const obj={}
    for(let ch of str){
        if(ch in obj){
            obj[ch]+=1
        }else{
            obj[ch]=1
        }
    }
    for(let key in obj){
        if(obj[key] > 1){
            result.push(key);
        }
    }
    return result;
}
console.log(repeatedcharacter("aabbabc"));