// console.log("Exercise MAT201 :");
// let matrix = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]];
// let rows = matrix.length;
// let line = matrix[0].length;
// let odd = [];
// let pair = [];
// for (let i = 0; i < rows; ++i) {
//     if (i % 2 === 0) {
//         for (let j = 0; j < line; ++j) {
//             odd += matrix[i][j] + " ";
//         }
//         console.log(odd);
//         odd = [];
//     } else {
//         for (let z = line - 1; z >= 0; --z) {
//             pair += matrix[i][z] + " ";
//         }
//         console.log(pair);
//         pair = [];
//     }
// }



// console.log("Exercise GMC905 :");
// let arr = [15, 28, 30, 44, 5, 7];
// let a = Math.max(...arr);
// let b = Math.min(...arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//         arr[i] = b;
//     }
// }
// console.log(arr);


// console.log("Exercise ARR101 :");
// let arr = [15, 28, 5, 30, 44, 5, 7];
// let x = +prompt("Մուտքագրել այն թիվը որը կցանկանաիք գտնել զանգվածի մեջ ։");
// let count = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===x){
//         count++;
//     }
//
// }
// console.log(count);


// console.log("Write a JS program to sort a numeric array and a string array.:");
// let arr = [15, "ab", 2, "hello", 22, "44_year", 155, 74];
// let str = [];
// let num = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         str += arr[i] + ",";
//     } else if (typeof arr[i] === "number") {
//         num += arr[i] + ",";
//     }
//
// }
// console.log(str);
// console.log(num);

// console.log(" Write a JS program to delete the 5th element from the array :");
// let arr = [15, 28, 30, 44, 5, 66, 7];
// for (let i = 0; i < arr.length; i++) {
//     if (i === 5) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// console.log("Write a JS program to reverse the array without using a new array. :" );
// let rev = [8, 25, 55, 14, 6, 55];
// let i = 0;
// let j = rev.length - 1;
//
// while (i < j) {
//     let start = rev[i];
//     rev[i++] = rev[j];
//     rev[j--] = start;
// }
// console.log(rev);


