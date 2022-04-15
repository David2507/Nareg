// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// let arr = [];
// let index = 0;
// for(let i = array.length-1; i>=0;i--){
//     // arr[index] = array[i];
//     // index++;
//     arr.push(array[i]);
// }
// console.log(arr);
// console.log(array.reverse());


// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// for (let number of array) {
//     sum += number;
// }
// console.log(sum);


// array.forEach(Element =>{
//     sum += Element;
// });
// console.log(sum);


let arr = [154, 28, 30, 44, 5, 45];
let num = 45;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        console.log(i);
        break;
    }
}