let café = 1; // Define a variable using a Unicode character
caf\u00e9 // => 1; access the variable using an escape

caf\u{E9} // => 1; another form of the same escape sequence
console.log("\u{e9}"); // Prints a smiley face emoji

let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.
let x = 25;
let y = 2;
let z = 5;

 // => 9007199254740992: 2 to the power
console.log(Math.pow(2,53))
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x


Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all

Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024) // => 10: Base-2 logarithm
Math.log1p(x) // Natural log of (1+x); accurate for very

Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3) // => 6: optimized multiplication of 32-bit

Math.clz32(0xf) // => 28: number of leading zero bits in a 32-

Math.trunc(3.9) // => 3: convert to an integer by truncating

Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(),
Math.tanh()
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(),
Math.atanh()


BigInt(Number.MAX_SAFE_INTEGER) // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
 // => 10n**100n: one googol

let timestamp = Date.now(); // The current time as a timestamp(a number).
let now = new Date(); // The current time as a Dateobject.
let ms = now.getTime(); // Convert to a millisecond
console.log(timestamp);
console.log(now);
console.log(ms);

let s = "Hello, world"; // Start with some text.// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4thcharacters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split atdelimiter string// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at orafter 3
s.indexOf("zz") // => -1: s does not include thesubstring "zz"
s.lastIndexOf("l") // => 10: position of last letter l// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC","NFKD"// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specifiedposition
s.codePointAt(0) // => 72: ES6, works for codepoints > 16bits// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right.Also trimRight// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6
let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g; // Matches all instances of oneor more digits
pattern.test(text) // => true: a match exists
console.log(pattern)
