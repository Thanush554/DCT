const str="++-+-++";
let count1=0;
let count2=0;
for(let i=0;i,i<str.length;i++){
    if(str[i] == "+"){
        count1++;
    } else {
        count2++;
    }
}
console.log(`there are ${count1} pluses and ${count2} minuses`);
