console.log("Exercise EASY0209 :");
let a = +prompt("Enter number:");
if (a >= 0 && a <= 1) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0221 :");
let num2 = +prompt("Enter number:");
let b1 = num % 10;
let c1 = parseInt(num2 / 10);
if (b1 === c1) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0222 :");
let num = +prompt("Enter number:");
let b = num % 10;
let c = parseInt(num / 10);
if (b + c > 7) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0227 :");
let num1 = +prompt("Enter number:");
if (num1 > 0 && num1 <= 9) {
    console.log(true);

} else
    console.log(false);


console.log("Exercise EASY0258 :");
let x1 = +prompt("Enter number:");
let x2 = +prompt("Enter number:");
let x3 = +prompt("Enter number:");
if (x1 >= 100 && x1 <= 999 || x2 >= 100 && x2 <= 999 || x3 >= 100 && x3 <= 999) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0264 :");
let y1 = +prompt("Enter number:");
let y2 = +prompt("Enter number:");
let y3 = +prompt("Enter number:");
if (Number.isInteger(y1) && Number.isInteger(y2) && Number.isInteger(y3)) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0275 :");
let z1 = +prompt("Enter number:");
let z2 = +prompt("Enter number:");
let z3 = +prompt("Enter number:");

if (z1 > 0 && z1 <= 9 && z2 > 0 && z2 <= 9 && z3 > 0 && z3 <= 9 ||
    z1 >= 100 && z1 <= 999 && z2 >= 100 && z2 <= 999 && z3 >= 100 && z3 <= 999) {
    console.log(true);
} else
    console.log(false);


console.log("Exercise EASY0288*(optional) :");
let d1 = +prompt("Enter number:");
let d2 = +prompt("Enter number:");
let d3 = +prompt("Enter number:");

if (d1 > 0 && d1 <= 9 && d2 > 0 && d2 <= 9 || d1 > 0 && d1 <= 9 && d3 > 0 && d3 <= 9 ||
    d2 > 0 && d2 <= 9 && d3 > 0 && d3 <= 9 || d1 >= 10 && d1 <= 99 && d2 >= 10 && d2 <= 99 ||
    d1 >= 10 && d1 <= 99 && d3 >= 10 && d3 <= 99 || d2 >= 10 && d2 <= 99 && d3 >= 10 && d3 <= 99) {
    console.log(true);
} else
    console.log(false);
