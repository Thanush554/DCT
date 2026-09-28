const str="abc";
const result={}
for(let ch of str){
    result[ch]=ch.toUpperCase();
}
console.log(result);