function frequencyDistribution(str){
    const result={}
    for(let ch of str){
        if(ch in result){
            result[ch]+=1;
        }else{
            result[ch]=1;
        }
    }
    return result;
}
console.log(frequencyDistribution("aabbabc"));