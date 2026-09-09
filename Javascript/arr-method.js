const myMovies=[];
myMovies.push("KGF");
console.log(myMovies.length);

myMovies.push("Toxic","Appu");
console.log(myMovies)
console.log(myMovies.length);

for(let i=0;i<myMovies.length;i++){
    console.log(myMovies[i]);
}

myMovies.unshift("Raj");
console.log(myMovies)
console.log(myMovies.length);