// console.log("Exercise 1:");
// console.log("Write a JavaScript function to get the highest number from three different numbers.");
//
// function max_of_three(x, y, z) {
//     let max;
//     if (x > y) {
//         max = x;
//     } else {
//         max = y;
//     }
//     if (z > max) {
//         max = z;
//     }
//     return max;
// }
//
// console.log("The largest of the three numbers is -> " + max_of_three(15, -10, 20));


// console.log("Exercise 2:");
// console.log("Write a JavaScript function to calculate surface of circle. Radius is parameter of function.");
//
// function surface(radius) {
//     return Math.round((Math.PI * (radius * radius)) * 100) / 100;
// }
// console.log(surface(5));

// console.log("Exercise 3:");
// console.log("Write the function fib (n), which returns the n-th Fibonacci Number.");
//
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// console.log(fibonacci(7));


// console.log("Exercise 4:");
// console.log("Write the function randomInteger (min, max) to generate a random" +
//     " integer between min and max, including min, max as possible values." +
//     "Any number from the interval min..max should have the same probability.");
//
// function randInt(min, max) {
//     return parseInt(Math.random() * ((max - 1) - min) + (min + 1));
// }
//
// console.log(randInt(5, 25));


// console.log("Exercise 5:");
// console.log("Create a Pythagorean function in JavaScript.")
//
// function pyt(a, b) {
//     return Math.sqrt((a * a) + (b * b));
// }
//
// console.log(pyt(4,3));

// console.log("Exercise 6:");
// console.log("Write a JavaScript function to clone an array.")
//
// function cloneArray(arr) {
//     return arr.slice(0);
// }
//
// console.log(cloneArray([5, 6, 84, 7, 5]));

// console.log("Exercise 7:");
// console.log("Write a JavaScript program to compute the sum and product of an array of integers.");
//
// function sumProduct(arr) {
//     let sum = 0;
//     let pro = 1;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         pro *= arr[i];
//     }
//     return "Sum = " + sum + "\n" + "Product = " + pro;
// }
//
// console.log(sumProduct([5, 6, 8, 10, 1]));

// console.log("Exercise 8:");
// console.log("Write a JavaScript function which receives ‘n’ and ‘arr’ parameters " +
//     "and will return the first ‘n’ elements of the array.");
//
//
// function eleArr(n,arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === n){
//             return arr[i];
//         }
//     }
// }
//
// console.log(eleArr(5,[6,15,4,8,20,11,88]));

// console.log("Exercise 9:");
// console.log("Write a JavaScript function to split a string and convert it into an " +
//     "array of words.(exp. “Hello World” should become [“Hello”,”World”]. Without split()");
//
// let str1 = 0;
// let str2 = 0;
//
// function split(str) {
//     let a = " ";
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === a) {
//             str1 = i;
//             arr.push(str.slice(str2, str1));
//             str2 = i + 1;
//         }
//
//     }
//     return arr;
// }
//
// console.log(split("Write a JavaScript function to split a string"));


// console.log("Exercise 10:");
// console.log("Write a JavaScript function to check whether an `input` is an array or not.");
//
// function inputArr(input) {
//     if (Array.isArray(input)) {
//         return "Is an Array -> " + `${input}`;
//     }
//     return "Is not a Array -> " + input;
// }
//
// console.log(inputArr([5, 4, 7, 8, 6,]));
// console.log(inputArr("Hello word"));


// console.log("Exercise 11:");
// console.log("Write a JavaScript function to get the function name.");
//
// function fname() {
//     return fname.name;
// }
//
// console.log("Name -> " + fname());

// console.log("OPTIONAL:")
// console.log("Exercise 1:");
// console.log("Write the function camelize (str), which converts lines of the form 'my-short-string' to 'myShortString'");
//
// function camelize(str) {
//     let strUpperCase = [...str];
//     for (let i = 0; i < strUpperCase.length; i++) {
//         if (strUpperCase[i] === "-") {
//             strUpperCase[i + 1] = strUpperCase[i + 1].toUpperCase();
//         }
//     }
//     str = "";
//     for (const n of strUpperCase) {
//         str += n;
//     }
//     str = str.split("-");
//     let result = "";
//     for (let j = 0; j < str.length; j++) {
//         result += str[j];
//     }
//     return result;
// }
//
// console.log(camelize("my-short-string-hello-word"));


// console.log("Exercise 2:");
// console.log("Write a function getSums (arr), which returns a new array of the same" +
//     "number of elements, in which at each position there must be a sum of" +
//     "elements arr to this position inclusive.");
//
// function getSums(arr) {
//     let newArray = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             sum += arr[j];
//         }
//         newArray.push(sum);
//         sum = 0;
//     }
//     return newArray;
// }
//
// console.log(getSums([1, 5, 8, 7, 3]));

