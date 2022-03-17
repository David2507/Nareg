console.log("Exercise 158 :");
let index = 2;
let str = "var";
let st = "e";
console.log(str.replace(str[index - 1], st));


console.log("Exercise 167 :");
let str1 = "heroic";
console.log("(" + str1[0] + str1.substring(3) + ")" + "=" + (str1.length - index));
console.log("(" + str1 + ")" + "=" + str1.length);


console.log("Exercise 180 :");
let b = "begin";
console.log(b.substring(0, 3) + "+" + b.substring(b.length, b.length - index));


console.log("Exercise 185 :");
let pro = "program";
let v = "var";
console.log(pro.substring(0, 3) + "+" + v + "=" + pro.substring(0, 3) + v);


console.log("Exercise 187 :");
let str2 = "longint";
let str3 = "array";
let index1 = 4;
console.log(str2.substring(str2.length - index1, str2.length) + str2 + "\n" + str3.substring(0, index1) + str3);


console.log("Exercise 194 :");
let pro1 = "program";
let sim = "r";
console.log(pro1.replace(sim, '').replace(sim, '').length);


console.log("Exercise 195 :");
let sim1 = "i";
let imp = "impressive";
console.log("pos=" + imp.replace(sim1, '').replace(sim1, '').length);