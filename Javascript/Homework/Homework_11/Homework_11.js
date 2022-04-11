// let x = +prompt("Մուտքագրել թիվ։ ");
// let bag = false;
// for (let i = 2; i <= x / 2; ++i) {
//     if (x % i === 0) {
//         bag = true;
//         break;
//     }
// }
// if (bag) {
//     console.log(x + "-ը բաղադրյալ թիվ է");
// } else
//     console.log(x + "-ը պարզ թիվ է");


let x = +prompt("Մուտքագրել թիվ։ ");
if (x <= 1) {
    console.log(x + "-ը բաղադրյալ թիվ է");
} else if (x === 2 || x === 3) {
    console.log(x + "-ը պարզ թիվ է");
} else if (x % 2 === 0) {
    console.log(x + "-ը բաղադրյալ թիվ է");
} else if (x % 3 === 0) {
    console.log(x + "-ը բաղադրյալ թիվ է");
} else
    console.log(x + "-ը պարզ թիվ է");

