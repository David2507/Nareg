// x.charAt(4);+++
// x.concat(‘ other string’);+++
// x.indexOf(‘s’),+++
// x.lastIndexOf(‘s’);+++
// x.length;+++
// x.repeat();+++
// x.slice(1,3);+++
// x.split("");+++
// x.substring(2,2);+++
// x.toLowerCase();+++
// x.toUpperCase();+++

//function lenght
function myStrLenght(string) {
    let next = 0;
    let i = 0;
    while (next !== undefined) {
        next = string[i];
        i++;
    }
    return i - 1;
}

console.log(myStrLenght("Hello word"));

//function repeat
console.log("____________________________");

function myRepeat(str, n) {
    let newStr = "";
    for (let i = 1; i < myStrLenght(str) * n; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(myRepeat("hi ", 10));

//function charAt
console.log("____________________________");

function myCharAt(str, n) {
    return str[n];
}

console.log(myCharAt("Hello", 0));


//function lastIndexOf
console.log("____________________________");

function myLastIndexOf(str, char) {
    let index = 0;
    for (let i = 0; i < myStrLenght(str); i++) {
        if (str[i] === char) {
            index = i;
        }
    }
    return index;
}

console.log(myLastIndexOf("barreav", "r"));


//function indexOf
console.log("____________________________");

function myIndexOf(str, char) {
    let index = 0;
    for (let i = 0; i < myStrLenght(str); i++) {
        if (str[i] === char) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(myIndexOf("barreav", "r"));


//function concat
console.log("____________________________");

function myConcat(str, newStr) {
    return str + newStr;

}

console.log(myConcat("barev", "Hayer"));


//function Substring
console.log("____________________________");

function mySubstring(str, start, end) {
    let newStr = "";
    for (let i = 0; i < myStrLenght(str); i++) {
        if (i >= start && i < end) {
            newStr += str[i];
        }
        if (i >= start && end === undefined) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(mySubstring("barev", 1, 3));


//function split
console.log(" ____________________________");

function mySplit(str, sep) {
    let arrStr = [];
    let newStr = "";
    str += sep;
    for (let i = 0; i < myStrLenght(str); i++) {
        newStr += str[i];
        if (str[i] === sep) {
            arrStr.push(newStr.slice(0, myStrLenght(newStr) - 1));
            newStr = "";
        }
    }
    return arrStr;
}

console.log(mySplit("123h456h789", "h"));


//function slice
console.log(" ____________________________");

function mySlice(str, start, end) {
    let newString = "";
    for (let i = 0; i < myStrLenght(str); i++) {
        if (i >= start && i < end) {
            newString += str[i];
        }
        if (i >= start && end === undefined) {
            newString += str[i];
        }
    }
    return newString;

}

console.log(mySlice("Hayastan", 2, 4))


//function toUpperCase
console.log(" ____________________________");

function myUpperCase(string) {
    let newString = "";
    let index = 0;
    for (let i = 0; i < string.length; i++) {
        if (typeof string[i] === "string") {
            if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                index = string.charCodeAt(i) - 32;
                newString += String.fromCharCode(index)

            } else {
                newString += string[i];
            }
        }
    }
    return newString;
}

console.log(myUpperCase("asdasdasd"));


//function toLowerCase
console.log(" ____________________________");

function myLowerCase(string) {
    let newString = "";
    let index = 0;
    for (let i = 0; i < string.length; i++) {
        if (typeof string[i] === "string") {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                index = string.charCodeAt(i) + 32;
                newString += String.fromCharCode(index)

            } else {
                newString += string[i];
            }
        }
    }
    return newString;
}

console.log(myLowerCase("DSFSDGaas24SDG"));

