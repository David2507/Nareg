// console.log("Exercise EASY0360 :");
// let n = +prompt("Enter number");
// let m = +prompt("Enter number");
// if (n > m) {
//     console.log(Math.min((n % 10), (parseInt(n / 10) % 10), (parseInt(n / 100))));
// } else
//     console.log(Math.min((m % 10), (parseInt(m / 10) % 10), (parseInt(m / 100))));


// console.log("Exercise MATR110  :");
// let x = +prompt("Enter number");
// let size = x-1;
// for(let i = 0; i < x * 2 - 1; i++){
//     let str = "";
//     if(i < x){
//         for(let k = 0; k <= i; k++){
//             str += "* ";
//         }
//     } else {
//         for(let k = 0; k < size; k++){
//             str += "* ";
//         }
//         size--;
//     }
//     console.log(str);
// }

// console.log("Exercise ERAST101  :");
// let x = 2;
// let y = +prompt("Enter number");
// let z = "";
//
// for (let i = x; i <= y; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag === 0) {
//         z += i + " ";
//     }
// }
// console.log(z);

// console.log("Exercise EASY0360 :");
// let num = +prompt("Enter number");
// let a = num % 10;
// let b = parseInt(num / 10) % 10;
// let c = parseInt(num / 100) % 10;
// let d = parseInt(num / 1000);
// let z = [a, b, c, d];
// console.log(z.sort((a, b) => b - a));


// console.log("Exercise GMC804 :");
// let num = +prompt("Enter number");
// let count = 0;
//
// again: for (let i = 1; i <= num; i++) {
//     for (let j = 2; j <= 10; j++) {
//         if (i % j === 0) {
//              console.log(i);
//         } else {
//             continue again;
//         }
//     }
// }

// console.log("Exercise IM00360 :");
// let n = +prompt("Enter number");
// let fib = [];
// fib[0] = 0;
// fib[1] = 1;
// for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//     console.log(fib[i]);
// }

// console.log("Exercise GMC1507 :");
// let n = +prompt("Enter number");
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += "  ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);


// console.log("Exercise GMC1508 :");
// let n = +prompt("Enter number");
// let string = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i * 2; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < (n - i) * 2 - 1; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// console.log("Exercise GYM0844  :");
// let x = +prompt("Enter number");
// for (let i = 1; i < x; i++) {
//     let st = "";
//     for (let j = 1; j <= x; j++) {
//         if (i % 2 === 0) {
//             st += Math.pow(x, i) + " ";
//         } else {
//             st += Math.pow(-x, i) + " ";
//         }
//     }
//     console.log(st);
// }

// console.log("Exercise NUMB0001 :");
// let num = +prompt("Enter number");
// let sum = 0;
// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     } else {
//         sum += 0;
//     }
// }
// if (sum === num) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }


// console.log("Exercise GYM0095 :");
// let x = +prompt("Enter number");
// let y = 4;
// let pow4 = Math.pow(y,x);
// console.log(pow4%3);

// console.log("Exercise GYM0882 :");
// let x = +prompt("Enter number");
// for (let i = 0; i < x; i++) {
//     let y = "";
//     for (let j = x; j > 0; j--) {
//         y += (j * 2 - 1) * j + " ";
//     }
//     console.log(y);
// }