// console.log("Exercise GM11P4  :");
// let num = +prompt("Enter number :");
// let tn1 = "a";
// let tn2 = "b";
// let t1 = 0;
// let t2 = 0;
// for (let i = 1; i <=num ; i++) {
//     let name = +prompt("Enter number :");
//     if (name=== tn1){
//         t1++;
//     }else if (name === t2){
//         t2++;
//     }
//
// }
// console.log(t1>t2?tn1:tn2);

// console.log("Exercise EASY0334 :");
// let x = 5;
// let d3 = 1;
// for (let i = x; i > 0; i--) {
//     console.log(d3, i);
//     d3++;
// }


// console.log("Exercise EASY0626  :");
// let x = 5;
// let num2 = 2;
// for (let i = 0; i < x; i++) {
//     let str = "";
//     for (let j = 0; j < x; j++) {
//         str += num2 + " ";
//     }
//     console.log(str);
//     num2 += 2;
// }


// console.log("Exercise EASY0793  :");
// let x = 5;
// let num2 = 16;
// for (let i = x; i > 0; i--) {
//     let result = num2.toString(2);
//     console.log(result);
//     num2 /= 2;
// }
// let x = 5;
// for (let i = 0; i < x; i++) {
//     let str = "";
//     for (let j = 0; j < x; j++) {
//         if (i === j) {
//             str += 1 + " ";
//         } else
//             str += 0 + " ";
//
//     }
//     console.log(str);
// }


// console.log("Exercise GMC301 :");
// let num = +prompt("Enter number max 10000 :");
// let count = 0;
// for (let i = 10; i <= num; i++) {
//     if (num <= 100 && i % 11 === 0) {
//         count++;
//     }
//     if (num <= 1000 && num > 100 && i % 101 === 0 || i % 111 === 0) {
//         count++;
//     }
//     if (num <= 10000 && num > 1000 && i % 1001 === 0 || i % 1111 === 0) {
//         count++;
//     }
// }
// console.log(count + 9);


// console.log("Exercise GMC205 :");
// let x = 10;
// for (let i = 1; i < x; i++) {
//
//     for (let j = 1; j <= i; j++) {
//         let str = "";
//         str += i;
//         console.log(str);
//
//     }
//     console.log(str.substring(0,x));
//
//
// }


// console.log("Exercise GMC202 :");
// let num = +prompt("Enter number :");
// let str1 = "";
// let count = 0;
// while (num > 0) {
//     str1 += num % 10;
//     num = parseInt(num / 10);
//     count++;
//     if (count === 3) {
//         str1 += ","
//         count = 0;
//     }
// }
// console.log(str1);
// let str2 = "";
// for (let i = str1.length-1; i >=0 ; i--) {
//     str2+=str1[i] + "";
// }
// console.log(str2);

// console.log("Exercise GMC802 :");
// let num = +prompt("Enter number :");
// let str = "";
// let x = Math.pow(5, num);
// str+= (x % 100);
// console.log(str);


// console.log("Exercise GYM0088  :");
// let x = +prompt("Enter number :");
//  console.log(Math.pow(3, x) % 2);


// console.log("Exercise CHALL001 :");
// let x = +prompt("Enter number :");
// let y = +prompt("Enter number :");
// let z = +prompt("Enter number :");
// console.log(x + "-" + y + "=" + z + "+" + (x - y - z));


// console.log("Exercise GM16P2 :");
// let x = +prompt("Enter number :");
// let str = "";
// let y = 0;
// while (x > 0) {
//     y = x % 10;
//     if (y === 4) {
//         x = parseInt(x / 10);
//     } else {
//         x = parseInt(x / 10);
//         str += y + "";
//     }
// }
// console.log(str);