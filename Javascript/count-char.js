// const str="javascript";
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i)=="a"){
//         count+=1;
//     }
// }
// console.log(count);

function countChar(str, ch){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch){
            count+=1;
        }
    }
    return count;
}
console.log(countChar("google","g"));
console.log(countChar("facebook", "a"));
console.log(countChar("facebook", "t"));