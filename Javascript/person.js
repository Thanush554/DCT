const person={firstname:"thanush", lastname:"gowda", email:"thanushgowda554@gmail.com"};
console.log(person.firstname);
console.log(Object.keys(person).length);

// determine object is empty
const errors={};
console.log(Object.keys(errors).length == 0);

// to get all the keys
console.log(Object.keys(person));

//to get all the values
console.log(Object.values(person));

// update the value in the object
person.email="thanushgowda@gmail.com"
console.log(person);

// add a new key value pair
person.city="bangalore";
console.log(person);

// remove the key value pair
delete person.lastname;
console.log(person);

// check if a ley is present
console.log("firstname" in person);

console.log(person.hasOwnProperty("firstname"));
console.log(person.hasOwnProperty("dob"));

//  check if a value is present
console.log(Object.values(person).includes("bangalore"));
