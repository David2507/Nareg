// let n = 10;
// while (n < 10) {
//     console.log(n);
//     n++;
// }
//
//
// let a = [1,5,4,8,7,5,6,7];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//
// }
// console.log("____________");
// for (let e of a){
//     console.log(e);
// }

// let x = +prompt("Enter");
// let y = 2*x-1;
//
// for (let i = x; i > 0; i--) {
//     console.log(y);
//     y -= 2;
// }

let x = +prompt("Enter your number");
let str = "";
let esim = x;
x = Math.abs(x)
while (x > 0){
    let y = x % 2;
    str = y + str;
    x = parseInt( x / 2);
}
if(esim > 0){
    console.log(str);
}
else
    console.log("-" + str);
