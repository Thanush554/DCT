const str="react";
const vowels="aeiou";
let result="";
for(let i=0;i<str.length;i++){
    if(!vowels.includes(str[i])){
        result+=str.charAt(i);
    }
}
console.log(result);