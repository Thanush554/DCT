// function findAllevens(arr){
//     const result=[];
//     arr.forEach((ele) => {
//         if(ele % 2==0){
//             result.push(ele);
//         }   
//     });
//     return result;
// }
// console.log(findAllevens([10,11,12,13,14]));

// using filter method
function finaallodds(arr1){
    const result=arr1.filter(function(ele){
        if(ele % 2==1){
            return true;
        }
    });
    return result;
}
console.log(finaallodds([10,11,12,13,14]));


