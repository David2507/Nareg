let a = "String";
console.log(a[3]);
console.log(a[1]);
console.log(a[5]);

let d = "String";
let index = 3;
console.log(d[index - 1]);

let s = "program";
console.log("s[3]=" + s[2]);
console.log("s[" + index + "-1]" + "=" + s[index - 2]);
console.log("s[" + index + "]=" + s[index - 1]);

let st = "readln";
console.log(st + "(" + st[0] + ")");

let pr = "program";
let v = "var";
let be = "begin";
console.log(pr[pr.length-1] + v[0] + be[be.length-2]);


let str = "string";
let cop = "copy";
let p = "pos";
let in1 = 4;
let in2 = 2;
let in3 = 3;
console.log(str[in1-1] + "\n"+cop[in2-1]+ "\n"+p[in3-1]);

let k = "writeln(s)";
let k1 = k.substring(0, k.length-1);

console.log(k1 +"!");
