// Execise 1: Calculate Average Score
let mathScore = 8;
let physicsScore = 7;
let chemistryScore = 9;
let averageScore = (mathScore + physicsScore + chemistryScore) / 3;
console.log('Average score:', averageScore);

// Execise 2: Calculate Rectangle Perimeter and Area
let width = 5;
let height = 3;
let perimeter = 2 * (width + height);
let area = width * height;
console.log('Perimeter:', perimeter);
console.log('Area:', area);

// Execise 3: Convert Celsius to Fahrenheit
let celsius = 30;
let fahrenheit = celsius * 1.8 + 32;
console.log(celsius + " (C) = " + fahrenheit + " (F)");

// Execise 4: Calculate Tip Amount 
let bill= 200000;
let tipPercent = 10;
let tipAmount = bill * tipPercent / 100;
let totalAmount = bill + tipAmount;
console.log('Bill amout:', bill);
console.log('Tip amount:', tipAmount);
console.log('Total amount:', totalAmount);

// Exercise 5: Check Even or Odd Number
let number = 7;
let isEven = number % 2 === 0;
isEven ? console.log(number + ' is an even number') : console.log(number + ' is an odd number');
