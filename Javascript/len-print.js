const names=["chatgpt","claude","gemini"];
for(let i=0;i<names.length;i++){
    console.log(names[i].length);
}

for(let i=0;i<names.length;i++){
    names[i]=names[i].toUpperCase();
}
console.log(names);

const companies=["microsoft","wipro","dell"];
for(let i=0;i<companies.length;i++){
    console.log(companies[i][0]+companies[i][companies[i].length-1]);
}