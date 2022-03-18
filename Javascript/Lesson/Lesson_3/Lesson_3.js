let s1 = Symbol.for("shared");
let t = Symbol.for("shared");
s1 === t // => true
s1.toString() // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"
let s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
console.log(s);
console.log(s.toUpperCase());

let a = ["a","b","c"]; // An array we want to copy
let b = []; // A distinct array we'llcopy into
let c =0;
let d;
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
    c++
}
console.log(c);
d = Array.from(b);
console.log(b);

function equalArrays(a, b) {
    if (a === b) {

        return true; // Identical arraysare equal
    }
    if (a.length !== b.length){
        return false;// Different-sizearrays not equal
    }
    for(let i = 0; i < a.length; i++) { // Loop through allelements
        if (a[i] !== b[i]) {
            return false;// If any differ,arrays not equal
        }
    }
    return true; // Otherwise they are equal
}

let [x, y,z,r] = [1,2,[3,4,5,4],7,8,9];
console.log(x,y,z,r);