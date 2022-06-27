// /**
//  * Exercise 1.
//  * Write a parametric function that gets five numbers and returns an array of those numbers.
//  */
//
// console.log("Exercise 1. ");
// console.log();
//
// function arrayFiveNumber(num1, num2, num3, num4, num5) {
//     let arr = [];
//     arr[0] = num1;
//     arr[1] = num2;
//     arr[2] = num3;
//     arr[3] = num4;
//     arr[4] = num5;
//
//     return arr;
// }
//
// console.log(arrayFiveNumber(5, 6, 7, 8, 9));
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 2.
//  * Write a parameter function that takes five different parameters and returns an object consisting of those parameters.
//  */
//
// console.log("Exercise 2. ");
// console.log();
//
// function objectParams(name, surName, age, height, weight) {
//     let person = {
//         name: name, surName: surName, age: age, height: height, weight: weight
//     }
//     return person;
// }
//
// console.log(objectParams("Karen", "Grigoryan", 25, 125, 80));
// console.log("_________________________");
// console.log();
//
// /**
//  * Exercise 3.
//  * Write a parametric function that gets an array and returns the first modified array member of the array.
//  */
//
// console.log("Exercise 3. ");
// console.log();
//
// function changFirstElement(array) {
//     array[0] = 25;
//     return array;
// }
//
// console.log(changFirstElement([15, 8, 4, 9]));
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 4.
//  * Write a parameter function that gets an array and returns the sum of all the members of the array.
//  */
//
// console.log("Exercise 4. ");
// console.log();
//
// function sumArrayElement(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// console.log("Sum --> " + sumArrayElement([5, 48, 8, 9, 62, 68]));
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 5.
//  * Write a parametric function that gets an array and returns the product of all members of the array.
//  */
//
// console.log("Exercise 5. ");
// console.log();
//
// function multiplicationArrayElement(array) {
//     let multiplication = 1;
//     for (let i = 0; i < array.length; i++) {
//         multiplication *= array[i];
//     }
//     return multiplication;
// }
//
// console.log("Multiplication --> " + multiplicationArrayElement([25, 48, 58, 9, 2, 47, 5]));
// console.log("_________________________");
// console.log();
//
// /**
//  * Exercise 6.
//  * Write a parametric function that gets "nothing".
//  */
//
// console.log("Exercise 6. ");
// console.log();
//
// function differenceArrayElement(array) {
//     let difference = 0;
//     for (let i = 0; i < array.length; i++) {
//         difference -= array[i];
//     }
//     return difference;
// }
//
// console.log("Difference --> " + differenceArrayElement([25, 48, 58, 9, 2, 47, 5]));
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 7.
//  * Write a parametric function that gets "nothing".
//  */
//
// console.log("Exercise 7. ");
// console.log();
//
// function nothingFunction() {
//
// }
//
// console.log(nothingFunction());
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 8.
//  * Write a parametric function that gets two parameters and returns the sum.
//  * In case of not receiving the second parameter, the first one is added to twenty.
//  */
//
// console.log("Exercise 8. ");
// console.log();
//
// function sumTwoParams(num1, num2) {
//     let sum;
//     if (num1 && num2) {
//         sum = num1 + num2;
//     } else {
//         sum = num1 + 20;
//     }
//     return sum;
// }
//
// console.log(sumTwoParams(5));
// console.log("_________________________");
// console.log();
// /**
//  * Exercise 9.
//  * Write a parametric function that gets two parameters and returns the product.
//  * If you do not get the second parameter, the first one is multiplied by fourteen.
//  */
//
// console.log("Exercise 9. ");
// console.log();
//
// function multiplicationTwoParams(num1, num2) {
//     let multiplication;
//     if (num1 && num2) {
//         multiplication = num1 * num2;
//     } else {
//         multiplication = num1 * 14;
//     }
//     return multiplication;
// }
//
// console.log(multiplicationTwoParams(2, 8));
// console.log("_________________________");
// console.log();
//
// /**
//  * Exercise 10.
//  * Write a parametric function that gets two parameters and returns the difference.
//  * If you do not get the second parameter, the first one subtracts ten.
//  */
//
// console.log("Exercise 10. ");
// console.log();
//
// function differenceTwoParams(num1, num2) {
//     let difference;
//     if (num1 && num2) {
//         difference = num1 - num2;
//     } else {
//         difference = num1 * 14;
//     }
//     return difference;
// }
//
// console.log(differenceTwoParams(15, 8));
//


// let x = 4;
//
// do {
//     console.log("OK");
//     x++;
// } while (x > 4 && x < 6)

let x = "Barev";
x[0] = "K";
console.log(x);