const person={firstname:"thanush", lastname:"gowda", email:"thanush@gmail.com"};
//  using for in loop
for(let key in person){
    console.log(key,person[key]);
}

for(let key of Object.keys(person)){
    console.log(key, person[key]);
}

Object.keys(person).forEach((key) => {
    console.log(key);
});