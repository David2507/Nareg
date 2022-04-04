// console.log("Exercise IF501 :");
// let x1 = +prompt("en");
// let y1 = +prompt("en");
// let x2 = +prompt("en");
// let y2 = +prompt("en");
// let y = +prompt("Enter the number of steps of the boat");
// if (x1 + y === x2 && y1 === y2 || x1 === x2 && y1 + y === y2) {
//     console.log("YES");
// } else
//     console.log("NO");


// console.log("Exercise FOR108 :");
// let point = +prompt("Enter points")
// for (let i = 9; i > 9-point; i--) {
//     console.log(i);
// }


// console.log("Exercise FOR129 :");
// let tens = +prompt("Enter tens");
// let count = 0;
// for (let i = 10; i <= 99; i++) {
//     if (i % 10 === 2) {
//         console.log(i);
//         count++
//         if (count === tens) {
//             break;
//         }
//     }
// }


// console.log("Exercise FOR138 :");
// let sum = +prompt("Enter");
// for (let i = 10; i <= 99; i++) {
//     if (i % 10 + parseInt(i / 10) === sum) {
//         console.log(i);
//     }
// }


// console.log("Exercise EASY0684 :");
// let mult = +prompt("Enter multiplication");
// let st = "";
// let x4 = mult;
// for (let i = 0; i < mult; i++) {
//     st += x4 + " ";
//     x4 *= mult;
// }
// for (let j = 1; j <= mult; j++) {
//     console.log(st);
// }


// console.log("Exercise ALG0001 :");
// let div = +prompt("Enter divider");
// let countt = 0;
// let mod = div;
// while (mod > 0){
//     if(div % mod === 0){
//         countt++;
//     }
//     mod--;
// }
// console.log(countt);



// console.log("Exercise ALG0006 :");
// let number = parseInt(prompt("Enter integer"));
// let sum = 0;
// let start = Math.pow(10,number-1);
// let end = Math.pow(10,number);
// for (let i = start; i < end; i++) {
//     sum += i;
// }
// console.log(sum);
//


// console.log("Exercise ALG0012 :");
// let value = +prompt("Enter number");
// let sum = 0;
// let points;
// while (value) {
//     sum = 0;
//     while ((value / 10) > 0) {
//         points = value % 10;
//         value = parseInt(value / 10);
//         sum += points;
//     }
//     if (sum <= 9) {
//         console.log(sum);
//     } else
//         value = sum;
//
// }


// console.log("Exercise BIT103  :");
// let x = +prompt("Enter number");
// for (let i = 0; i < x; i++) {
//
// }
// console.log(2 << x - 1);


// console.log("Exercise IF304 :");
// let num = +prompt("Enter number :");
// if (num % 2 === 0) {
//     console.log(Math.min(num % 10, parseInt(num / 10)));
// } else
//     console.log(num);


// console.log("Exercise IF507 :");
// let x = +prompt("Enter first number");
// let y = +prompt("Enter second number");
// if (x % 2 === 1 && y % 2 === 1) {
//     console.log("BLACK");
// } else if (x % 2 === 1 && y % 2 === 0) {
//     console.log("WHITE");
// } else if (x % 2 === 0 && y % 2 === 1) {
//     console.log("WHITE");
// } else if (x % 2 === 0 && y % 2 === 0) {
//     console.log("BLACK");
// }

// console.log("Exercise MATR108  :");
// let x = +prompt("Enter number");
// let y = "*";
// for (let i = 0; i < x; i++) {
//
//     console.log(y);
//     y+= " * *";
// }
//


// console.log("Exercise IF318  :");
// let x = +prompt("Enter a four-digit number (1234)");
// let a,b,c,d;
// a = x % 10;
// b = parseInt(x / 10) % 10;
// c = parseInt(x / 100) % 10;
// d = parseInt(x / 1000);
// if ((a + b + c + d) % 2 === 1) {
//     console.log(Math.max(a, b, c, d));
// } else console.log(Math.min(a, b, c, d));







