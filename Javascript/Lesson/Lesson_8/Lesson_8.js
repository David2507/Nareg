let arr1 = [25,254,8,54,65,1];
let arr2 = [5,1,254,80,65,1];
function f(a,b) {
    return a-b;
}
console.log(arr1.sort(f));




// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] ===arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }