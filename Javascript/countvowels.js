const str="javascript";
const vowels="aeiou";
let vowelvalue=0;
for(let i=0;i<str.length;i++){
    const currChar=str[i];
    if(vowels.includes(currChar)){
        vowelvalue+=1;
    }
}
console.log(vowelvalue);

