//template literals
console.log("10"+2);
console.log("5"+4);
console.log("5"+ "10" + 5);

//Type coersion
//It is implicitly (default/internally) type conversion (changing the data type)
console.log("10"-2);
console.log("10"/2);
console.log("10" *2);
console.log(10 -"2");

//Explicitly (manually/forcefully) it is called as type conversion
console.log(parseInt("5")+parseInt("5")+3);
console.log(parseFloat("5.4")+parseInt("4")+4);

// we can also make use of tye conversion like when there will be mixture of values or data types
console.log(Number("4")+Number("4.5")+3);

const source="bangalore",destination="mysore",distance="143 kms",time="2 hours 30 mins.";
console.log("the distance between " +source+ " and " +destination+ " is " +distance+ " and the time taken is "+time+"");
console.log(`The Distance between ${source} and ${destination} is ${distance} and the time taken is ${time}`);