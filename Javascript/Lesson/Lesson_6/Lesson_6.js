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

// let x = +prompt("Enter your number");
// let str = "";
// let esim = x;
// x = Math.abs(x)
// while (x > 0){
//     let y = x % 2;
//     str = y + str;
//     x = parseInt( x / 2);
// }
// if(esim > 0){
//     console.log(str);
// }
// else
//     console.log("-" + str);


// let book = {
//     id: 6,
//     name: "book",
//     author: {
//         id: 1,
//         "first name": "First name",
//         lastName : "lastName"
//     }
// }
// console.log(book);
// let empotyObj = {};
// let newBook = Object.create(book);
// console.log(empotyObj);
// console.log(newBook);


// let a = {};
// a.x = 15;
// let b = Object.create(a);
// b.y = 10;
// let c = Object.create(b);
// c.z = 5;
// let k = Object.create(a);
// k.p = 150;
// let f = Object.create(null);
// f.o = "00024";
// let q = Object.create(f);
// q.u = "uuuu";


// let book = {
//     x:10,
//     y:100,
//     z:104,
//     k:{
//         s:55,
//     }
// }
// for (let bookKey in book) {
//
//     console.log(book[bookKey]);
// }


let pos = {x:0,y:0};
let dim = {wi:145,he:54};
let rect ={...pos,...dim};

console.log(rect);
