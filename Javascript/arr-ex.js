const numbers = [];

for (let i = 221; i <= 230; i++) {
    numbers.push(i);
}

console.log(numbers);

// sum of the array
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(sum);