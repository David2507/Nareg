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


// let a = [8, 5, 8, 7, 9, 66, 4];
// let sum = 0;
// console.log(a.map(value => value + 5));
// a.forEach(value => {
//     sum += value
// })
// console.log(sum);
//
//
// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(index => {
//         sum += index;
//     })
//     return sum;
//
// }
//
// console.log(sumArray([5, 6, 8, 4, 7]));
//
// let c = [1,2,3,4,5,6,7];
// // console.log(c.filter(i => i%2===0));
//
// console.log(c.copyWithin(1, 3,6));


// let x = 10;
// let y = 100;
// for (let i = x; i < y; ++i) {
//     if (i % 5 === 0 && i % 7 === 0) {
//         console.log(i);
//     }
// }
// console.log("There is no multiple number in this range");

// let x = 10;
// let y = 11;
// let isMultiple = false;
// for (let i = x; i <= y; ++i) {
//     if (i % 5 === 0 && i % 7 === 0) {
//         console.log(i)
//         isMultiple = true;
//     }
// }
//
// if(!isMultiple) {
//     console.log("no multiples")
// }
// let days = new Date();
// let myToday = days.getDate();
// console.log(yDays);

// let a = +prompt("number");
// let b = +prompt("number");
// let c = +prompt("number");
// if (Number.isInteger(Math.sqrt(a * b))) {
//     console.log(a);
//     console.log(b);
//     console.log(Math.sqrt(a * b));
// }
//
// if (Number.isInteger(Math.sqrt(a * c))) {
//     console.log(a);
//     console.log(c);
//     console.log(Math.sqrt(a * c));
// }
//
// if (Number.isInteger(Math.sqrt(c * b))) {
//     console.log(c);
//     console.log(b);
//     console.log(Math.sqrt(c * b));
// }
//
// if (Number.isInteger(Math.sqrt(a * b)) && Number.isInteger(Math.sqrt(a * c)) && Number.isInteger(Math.sqrt(c * b))) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(Math.sqrt(a * b));
//     console.log(Math.sqrt(a * c));
//     console.log(Math.sqrt(c * b));
// }

//
// for (let i = 999; i >= 100; i--) {
//     let a = Math.sqrt(i*19);
//     let b = Math.floor(Math.sqrt(i*19));
//     if (a-b === 0) {
//         console.log(i);
//         break;
//     }
// }


// var m = [5, 4, 8, 6];
// var m1 = "[5,4,8,6]";
// var m2 = true;
// var m3 = 25;
// var m4;
//
// console.log(typeof m);
// console.log(typeof m1);
// console.log(typeof m2);
// console.log(typeof m3);
// console.log(typeof m4);
// console.log(typeof m5);
//
// var a = "1";
// var b = "5";
// console.log(+a + +b);

// let arr = [];
// let end = 20;
// let count = 2;
// arr[0] = 0;
// arr[1] = 1;
//
// for (let i = 2; i < end; i++) {
//
//     for (let j = 0; j < i; j++) {
//         if (count === i) {
//             arr.push(arr[i-1] + count + j);
//         }
//         if (count < i) {
//             count++;
//         }
//
//     }
// }
// console.log(arr);

// let end = 23;
// let arr = [];
// let count = 2;
// arr[0] = 0;
// arr[1] = 1;
// for (let i = 2; i < end; i += count) {
//     arr.push(arr[arr.length - 1] + count);
//     for (let j = 1; j < count; j++) {
//         arr.push(arr[arr.length - 1] + 1);
//     }
//     count++;
// }
//
// console.log(arr);

// let a = 0;
// if (a){
//     console.log("a")
// }else {
//     console.log("b")
// }

// let a = 3;
// let b = 4;
// let c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
// console.log(c);

// function leapYear(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 4 === 0) {
//             newArray[i] = arr[i];
//         } else {
//             newArray[i] = "isn't leap year";
//         }
//     }
//     console.log(newArray);
// }
//
// leapYear([2000, 2001, 2002, 2003, 2004, 2005]);

// function makeres(a, b, string) {
//     let result;
//     let r = 5;
//     if (string === "qarakusi") {
//         result = a * a;
//     } else if (string === "shrjan") {
//         result = Math.PI * (r * r);
//     } else if (string === "uxxankyun") {
//         result = a * b;
//     } else if (string === "uxxankyun erankyun") {
//         result = a * b / 2;
//     } else {
//         result = "nman patkeri makers chem hashvum";
//     }
//     return result;
// }
//
// console.log(makeres(5, 7, "shrjan"));
// function numbers(tiv1, tiv2){
//     if (typeof tiv1 === "number"){
//
//         if(tiv1 === 50 || tiv2 === 50 || tiv1+tiv2 === 50){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     return numbers
// }
// console.log(numbers(25, 25));

// function containNumber() {
//     let array = [1, 2, 3, 4, 5];
//     let number = 3;
//     let boolean = false;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             console.log("you win");
//             boolean = true;
//         }
//     }
//     if (!boolean) {
//         console.log("try again");
//     }
// }
//
// containNumber();

// function containNumber(number) {
//     if (typeof number === "number") {
//         if (number > 0 && number < 100 || number > 200 && number < 300) {
//             return true;
//         } else {
//             return false;
//         }
//
//     }
//     return "please send number";
// }
//
// console.log(containNumber(25));

// function replaceArray(arr) {
//     let newArray = [];
//     let j = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArray[j] = arr[i];
//         j++;
//     }
//     return newArray;
// }
//
// console.log(replaceArray([45, 8, 6, 56, 9, 5]));

// function containsNumber(number) {
//     if (number >= 1 && number <= 5) {
//         return {
//             workingDay: number,
//         };
//     } else if (number === 6 || number === 7) {
//         return {
//             weekend: number,
//         };
//     }
//     return "parameter default value";
// }
//
// console.log(containsNumber(9));

// let obj = {
//     name: "Karen",
//     surName: "Petrosyan",
// }
//
// function stringArray(...strings) {
//     let array = [2000, 2001, 2002, 2003, 2004, 2005];
//     let array2 = [...array];
//
//
//     for (let i = 0; i < strings.length; i++) {
//         array[i] = strings[i];
//     }
//     let newArray = [];
//     for (let newArrayElement of array) {
//         newArray += "-" + newArrayElement;
//     }
//     return newArray;
// }
//
// console.log(stringArray("A", "B", "C", "D", "E", "F"));


// function operatorAndNumber(operator, ...numbers) {
//     let result;
//     if (operator === "+" || operator === "-") {
//         result = 0;
//     } else result = 1;
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (operator === "+") {
//             result += numbers[i];
//         } else if (operator === "-") {
//             result -= numbers[i];
//         } else if (operator === "*") {
//             result *= numbers[i];
//         } else if (operator === "/") {
//             result /= numbers[i];
//         }
//     }
//     return result;
// }
//
// console.log(operatorAndNumber("*", 8, 54, 22, 15, 288));

// let x = 4 * "barev";
// console.log(x);
// console.log(x == NaN);

// function objectArray(...param) {
//     let obj = {
//         String: [],
//         number: [],
//         boolean: [],
//         symbol: [],
//     }
//     let st = 0;
//     let num = 0;
//     let bool = 0;
//     let sim = 0;
//
//     for (let i = 0; i < param.length; i++) {
//         if (typeof param[i] === "string") {
//             obj.String[st] = param[i];
//             st++;
//         } else if (typeof param[i] === "number") {
//             obj.number[num] = param[i];
//             num++;
//         } else if (typeof param[i] === "boolean") {
//             obj.boolean[bool] = param[i];
//             bool++;
//         } else if (typeof param[i] === "symbol") {
//             obj.symbol[sim] = param[i];
//             sim++;
//         }
//     }
//     return obj;
// }
//
// console.log(objectArray(Symbol("a"), 5, Symbol("c"), true, "a", 8, "b", 99, false));
//
// function objectArray(...numbers) {
//     let obj = {
//         even: [],
//         odd: [],
//     }
//     let even = 0;
//     let odd = 0;
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             obj.even[even] = numbers[i];
//             even++;
//         } else {
//             obj.odd[odd] = numbers[i];
//             odd++;
//         }
//     }
//     return obj;
// }
//
// console.log(objectArray(5, 18, 9, 6, 12, 5, 8, 63, 7));
//
// function maxOddNumber(...numbers) {
//     let maxOdd = 0;
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 1 && numbers[i] > maxOdd) {
//             maxOdd = numbers[i];
//         }
//     }
//     return maxOdd;
// }
//
// console.log(maxOddNumber(5, 18, 9, 6, 12, 5, 8, 63, 7));

// function isPalindrome(string) {
//     let strLen = string.length;
//     for (let i = 0; i < strLen / 2; i++) {
//         if (string[i] !== string[strLen - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPalindrome("katak"));


// function repetitiveString(...strings) {
//     let index = 1;
//     let m = 0;
//     let str;
//     for (let i = 0; i < strings.length; i++) {
//         for (let j = i; j < strings.length; j++) {
//             if (strings[i] === strings[j])
//                 m++;
//             if (index < m) {
//                 index = m;
//                 str = strings[i];
//             }
//         }
//         m = 0;
//     }
//     return str + " tary handipum e " + index + " angam";
// }
//
// console.log(repetitiveString("a", "b", "b", "a", "a", "a", "b", "c", "d", "d", "d"));
// function esim(number) {
//     let a = number.toString();
//     let result = false;
//     for (let i = 0; i < a.length-1; i++) {
//         result = a[i] < a[i + 1];
//     }
//     return result;
//
// }
//
// console.log(esim(4563));
// function arr(array) {
//     let newArray = [];
//     let index = 0;
//     for (let i of array) {
//         if (newArray.indexOf(i) === -1) {
//             newArray[index] = i;
//             index++;
//         }
//     }
//     return newArray;
// }
//
// console.log(arr([1, 2, 2, 3]));

// function findGivenValue(array, value) {
//     let result;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             result = array[i];
//             return result;
//         } else {
//             result = null;
//         }
//     }
//     return result;
// }
//
// console.log(findGivenValue([45, true, "Karen", "Valod"], "Valo"));

// function thisTypeArray(array1, array2, type) {
//     let arrays = [...array1, ...array2];
//     let newArray = [];
//     let newObject = {};
//     let index = 0;
//     for (let i = 0; i < arrays.length; i++) {
//         if (typeof arrays[i] === type) {
//             newArray[index] = arrays[i];
//             newObject[type] = [...newArray];
//             index++;
//         }
//     }
//     return newObject;
// }
//
// console.log(thisTypeArray([1, 5, 7, "Valod", true], ["Garnik", false, 77], "number"));

// let person = {
//     name: "Valod",
//     surname: "Karapetyan",
//     age: 25,
//     height: 187,
//     married: true,
// }
//
// function swap(object){
//    let swapObject = {};
//     for(let key in object){
//         swapObject[object[key]] = key;
//     }
//     return swapObject;
// }
//
// console.log(swap(person));

// function sortingArray(array) {
//     let object = {
//         truthyValues: [],
//         falsyValues: [],
//     }
//     let indexTruthy = 0;
//     let indexFalsy = 0;
//
//    array.filter(function(value) {
//        if (!!value) {
//            object.truthyValues[indexTruthy] = value;
//            indexTruthy++;
//        } else {
//            object.falsyValues[indexFalsy] = value;
//            indexFalsy++;
//        }
//    });
//     return object;
// }
//
// console.log(sortingArray([NaN,1,"","Aram",null,true,false,"a",10,0]));


