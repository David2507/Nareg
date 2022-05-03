// let café = 1; // Define a variable using a Unicode character
// caf\u00e9 // => 1; access the variable using an escape
//
// caf\u{E9} // => 1; another form of the same escape sequence
// console.log("\u{e9}"); // Prints a smiley face emoji
//
// let billion = 1_000_000_000; // Underscore as a thousands separator.
// let bytes = 0x89_AB_CD_EF; // As a bytes separator.
// let bits = 0b0001_1101_0111; // As a nibble separator.
// let fraction = 0.123_456_789; // Works in the fractional part, too.
// let x = 25;
// let y = 2;
// let z = 5;
//
//  // => 9007199254740992: 2 to the power
// console.log(Math.pow(2,53))
// Math.round(.6) // => 1.0: round to the nearest integer
// Math.ceil(.6) // => 1.0: round up to an integer
// Math.floor(.6) // => 0.0: round down to an integer
// Math.abs(-5) // => 5: absolute value
// Math.max(x,y,z) // Return the largest argument
// Math.min(x,y,z) // Return the smallest argument
// Math.random() // Pseudo-random number x where 0 <= x
//
//
// Math.cbrt(27) // => 3: cube root
// Math.hypot(3, 4) // => 5: square root of sum of squares of all
//
// Math.log10(100) // => 2: Base-10 logarithm
// Math.log2(1024) // => 10: Base-2 logarithm
// Math.log1p(x) // Natural log of (1+x); accurate for very
//
// Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p()
// Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0
// Math.imul(2,3) // => 6: optimized multiplication of 32-bit
//
// Math.clz32(0xf) // => 28: number of leading zero bits in a 32-
//
// Math.trunc(3.9) // => 3: convert to an integer by truncating
//
// Math.fround(x) // Round to nearest 32-bit float number
// Math.sinh(x) // Hyperbolic sine. Also Math.cosh(),
// Math.tanh()
// Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(),
// Math.atanh()
//
//
// BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
// let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
//  // => 10n**100n: one googol
//
// let timestamp = Date.now(); // The current time as a timestamp(a number).
// let now = new Date(); // The current time as a Dateobject.
// let ms = now.getTime(); // Convert to a millisecond
// console.log(timestamp);
// console.log(now);
// console.log(ms);
//
// let s = "Hello, world"; // Start with some text.// Obtaining portions of a string
// s.substring(1,4) // => "ell": the 2nd, 3rd, and 4thcharacters.
// s.slice(1,4) // => "ell": same thing
// s.slice(-3) // => "rld": last 3 characters
// s.split(", ") // => ["Hello", "world"]: split atdelimiter string// Searching a string
// s.indexOf("l") // => 2: position of first letter l
// s.indexOf("l", 3) // => 3: position of first "l" at orafter 3
// s.indexOf("zz") // => -1: s does not include thesubstring "zz"
// s.lastIndexOf("l") // => 10: position of last letter l// Boolean searching functions in ES6 and later
// s.startsWith("Hell") // => true: the string starts with these
// s.endsWith("!") // => false: s does not end with that
// s.includes("or") // => true: s includes substring "or"// Creating modified versions of a string
// s.replace("llo", "ya") // => "Heya, world"
// s.toLowerCase() // => "hello, world"
// s.toUpperCase() // => "HELLO, WORLD"
// s.normalize() // Unicode NFC normalization: ES6
// s.normalize("NFD") // NFD normalization. Also "NFKC","NFKD"// Inspecting individual (16-bit) characters of a string
// s.charAt(0) // => "H": the first character
// s.charAt(s.length-1) // => "d": the last character
// s.charCodeAt(0) // => 72: 16-bit number at the specifiedposition
// s.codePointAt(0) // => 72: ES6, works for codepoints > 16bits// String padding functions in ES2017
// "x".padStart(3) // => " x": add spaces on the left to a length of 3
// "x".padEnd(3) // => "x ": add spaces on the right to a length of 3
// "x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
// "x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// // Space trimming functions. trim() is ES5; others ES2019
// " test ".trim() // => "test": remove spaces at start and end
// " test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
// " test ".trimEnd() // => " test": remove spaces at right.Also trimRight// Miscellaneous string methods
// s.concat("!") // => "Hello, world!": just use + operator instead
// "<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6
// let text = "testing: 1, 2, 3"; // Sample text
// let pattern = /\d+/g; // Matches all instances of oneor more digits
// pattern.test(text) // => true: a match exists
// console.log(pattern)
//
//
// let matrix = [[1,2,3], [4,5,6], [7,8,9]];
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix);
// // }

// let square = function (x, y, z) {
//     return (x * x + y) % z;
// };
//
// console.log(square(10,4,5));

// let y = 2 ** 3 ** 2;
// x = ~-5;
// w = y = x = 3;
// console.log(x);
// n=5;
// switch(n) {
//     case 1: // Start here if n === 1
//         console.log("esim1 e");
// // Execute code block #1.
//         break; // Stop here
//     case 2: // Start here if n === 2
//         console.log("esim2 e");
// // Execute code block #2.
//         break; // Stop here
//     case 3: // Start here if n === 3
//         console.log("esim3 e");
// // Execute code block #3.
//         break; // Stop here
//     default: // If all else fails...
//         console.log("esim e");
// // Execute code block #4.
//         break; // Stop here
// }

// let i, j, sum = 0;
// for(i = 0, j = 10 ; i < 10 ; i++, j--) {
//     sum += i * j;
//     console.log(sum);
// }

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
// for(let element of data) {
//     sum += element;
//     console.log(sum);
// }
// console.log(sum);


// let o = { x: 1, y: 2, z: 3 };
// for(let element of o) { // Throws TypeError because o is not iterable
//     console.log(element);
// }


// let frequency = {};
// for(let i of "Ha ha ha") {
//     if (frequency[i]) {
//         frequency[i]++;
//     } else {
//         frequency[i] = 1;
//     }
// }
// console.log(frequency);

// let o = { x: 1, y: 2, z: 3 };
// let a = [], i = 0;
// for(a[i++] in o){
//     console.log(a);
// }


// let empty = {}; // An object with noproperties
// let point = {x: 0, y: 0}; // Two numericproperties
// let p2 = {x: point.x, y: point.y + 1}; // More complex values
// let book = {
//     for: "all audiences", // for is reserved, but no quotes.
//     author: { // The value of this property is
//         firstname: "David", // itself an object.
//         surname: "Flanagan"
//     }
// }
// console.log(book);


// let addr = "";
// for(let i = 0; i < 4; i++) {
//     addr += customer[`address${i}`] + "\n";
// }
// console.log(addr);


// let o1 = Object.create({x: 5, y: 2});
//
// console.log(o1.x+6);
// let o2 = Object.create(null);
// console.log(o2);
// let o3 = Object.create(Object.prototype);
// console.log(o3);
// function addstock(portfolio, stockname, shares) {
//     portfolio[stockname] = shares;
// }
//
// function computeValue(portfolio) {
//     let total = 0.0;
//     for(let stock in portfolio) { // For each stock in the portfolio:
//             let shares = portfolio[stock]; // get the number of shares
//         let price = getQuote(stock); // look up share price
//         total += shares * price; // add stock value to total value
//     }
//     return total; // Return total value.
// }
//
// console.log(computeValue(6.6));
// let o = { x: 1 };
// console.log(o.propertyIsEnumerable());
//
// let c = {x: 1, y: 2, z: 3};
// for(let p in c) {
//     console.log(p);
// }
// let target = {x: 1}, source = {y: 2, z: 3};
// for(let key of Object.keys(source)) {
//     target[key] = source[key];
// }
// console.log(target);
// console.log(Object.keys(source));
// let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];
// console.log(b);
// let undefs = [ 5,,4];
// console.log(Array.of(10,4));
// let copy = Array.from(undefs);
// console.log(copy);
// let a = ["world"]; // Start with a one-element array
// let value = a[0]; // Read element 0
// a[1] = 3.14; // Write element 1
// let i = 2;
// a[i] = 3; // Write element 2
// a[i + 1] = "hello"; // Write element 3
// a[a[i]] = a[0];
// console.log(a);
//
// let f = [true, false];
// console.log(f[1]);
// let d =[];
// d[1000] = 0;
// console.log(d.length);
// let letters = [..."Hello world"];
// console.log(letters.length);


let a = [8, 5, 8, 7, 9, 66, 4];
let sum = 0;
console.log(a.map(value => value + 5));
a.forEach(value => {
    sum += value
})
console.log(sum);


function sumArray(arr) {
    let sum = 0;
    arr.forEach(index => {
        sum += index;
    })
    return sum;

}

console.log(sumArray([5, 6, 8, 4, 7]));

let c = [1,2,3,4,5,6,7];
// console.log(c.filter(i => i%2===0));

console.log(c.copyWithin(1, 3,6));
