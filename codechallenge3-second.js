const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let result = 0;

result = numbers.reduce((result, value) => (result += value));
console.log(result);
