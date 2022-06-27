/**
 * Exercise 1.
 * Write a function that returns the product of two numbers.
 * The function is given two values and returns their multiply.
 */

function multiply(a, b) {
    let result = a * b;
    return result;
}

console.log(multiply(5, 6));

/**
 * Exercise 2.
 * Write a function that alerts "Hello name". name is variable.
 * The function gets a name and alerts Hello plus our imported name.
 */

function alertHelloName(name) {
    alert("Hello " + name);
    console.log("Hello " + name);
}

alertHelloName("Valod");

/**
 * Exercise 3.
 * Write a function that uses a variable global scope.
 * Global is the variable that is accessible outside the body of the code.
 * We declare a variable out of the function and return that variable in the function.
 */

let globScope = 25;

function takeToGlobScope() {
    return globScope;
}

console.log(takeToGlobScope());

/**
 * Exercise 4.
 * Write a function that changes the value of a global variable.
 */

let globalVariable = 12;

function changeGlobVariable() {
    globalVariable = 10;
    return globalVariable;
}

console.log(changeGlobVariable());

/**
 * Exercise 5.
 * Write a function that returns the area of a circle.
 * The area of a circle is equal to a constant pi multiplied by the square of the radius.
 * PI is a constant value equal to 3․14.
 */

function calculateArea(radius) {
    let area = (radius * radius * Math.PI);
    return area;
}

console.log(calculateArea(25));


/**
 * Exercise 6.
 * Write a function that returns the type of a given parameter.
 * We call any value by calling the function. It checks us through typeof and returns the type of the given parameter.
 */

function typeOfParameter(param) {
    return typeof param;
}

console.log(typeOfParameter(24));

/**
 * Exercise 7.
 * Write a function that returns the percentage of two given numbers.(200,11 --> 22)․
 */

function percentTwoNumbers(num1, num2) {
    let percent = (num1 / 100) * num2;
    return percent;
}

console.log(percentTwoNumbers(200, 11));

/**
 * Exercise 8.
 * Write a function that calculates and returns Fahrenheit at Celsius.
 * Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C.
 */

function fahToCel(fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9;
    return result;
}

console.log(fahToCel(45) + "°C");


/**
 * Exercise 9.
 * Write two functions
 * The "First" function returns the difference between two given numbers.
 * The "Second" function returns the quotient of two given numbers.
 */

function firstFunction(x, y) {
    let dif = x - y;
    return dif;
}

console.log(firstFunction(20, 18));

//second function
function secondFunction(x, y) {
    let quotient = x / y;
    return quotient;
}

console.log(secondFunction(20, 10));

let sumTwoFunction = firstFunction(18, 4) + secondFunction(25, 5);
console.log(sumTwoFunction);