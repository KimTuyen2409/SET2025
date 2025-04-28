// sự khác nhau giữa == và === là: == là so sánh giá trị, === là so sánh giá trị và kiểu dữ liệu.
// Sự khác nhau giữa let, var và const là  const là giá trị không thay đổi, let là giá trị có thể thay đổi, Var giống let nhưng dễ gây lỗi nên hạn chế dùng.
let weight = 64;
let height = 1.9;
function BMI(weight, height) {
  return weight / height ** 2;
}
console.log("BMI: " + BMI(weight, height));

let principal = 100000;
let rate = 3.875;
let time = 5;
function calculateSimpleInterest(principal, rate, time) {
  return principal * (1 + rate * time);
}
console.log(
  "Calculating Simple Interest: " +
    calculateSimpleInterest(principal, rate, time)
);

let USD = 10;
function convertCurrency(USD) {
  return USD * 25000;
}
console.log(USD + " USD = " + convertCurrency(USD) + " VND");

function calculateTime(seconds) {
  let hours = 0;
  let minutes = 0;
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
    }
  }
  return `${hours}:${minutes}:${seconds}`;
}
let seconds = 3 * 60 * 60 + 4 * 60 + 30;
console.log(seconds + "seconds => " + calculateTime(seconds));

let mathScore = 8;
let physicsScore = 7;
let chemistryScore = 9;

let averageScore = (mathScore + physicsScore + chemistryScore) / 3;

console.log("Average score:", averageScore);

let celsius = 30;

let fahrenheit = (9 / 5) * celsius + 32;

console.log(celsius + "°C = " + fahrenheit + "°F");

let width = 5;
height = 3;
let perimeter = (width + height) * 2;

let area = width * perimeter;

console.log("Perimeter:", perimeter);
console.log("Area:", area);

let billAmount = 200000;

let tipPercent = 10;
let tipAmount = (billAmount * tipPercent) / 100;

let totalAmount = tipAmount + billAmount;

console.log("Bill amount:", billAmount);
console.log("Tip amount:", tipAmount);
console.log("Total amount:", totalAmount);

let number = 7;

let isEven = number % 2 == 0;

console.log("Number " + number + " is " + (isEven ? "even" : "odd"));