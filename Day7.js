// sự khác nhau giữa == và === là: == là so sánh giá trị, === là so sánh giá trị và kiểu dữ liệu. 
// Sự khác nhau giữa let, var và const là  const là giá trị không thay đổi, let là giá trị có thể thay đổi, Var giống let nhưng dễ gây lỗi nên hạn chế dùng.
let weidght = 50;
let tall = 1.65;

function calculateBMI(weidght, tall) {
  return weidght / tall ** 2;
}
console.log("Calculating BMI: " + calculateBMI(weidght, tall));

function calculateSimpleInterest(principal, rate, time) {
  return principal * (1 + rate * time);
}

function convertUSDToVND(amount) {
  return amount * 25000;
}

function calculateTime(seconds) {
  let hours = 0;
  let minutes = 0;
  if (seconds > 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    if (minutes > 60) {
      hours = minutes / 60;
      minutes = minutes - hours * 60;
    }
  }
  return [hours, minutes, seconds];
}
console.log("Calculatimes: " + calculateTime(122));


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

