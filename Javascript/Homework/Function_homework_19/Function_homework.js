console.log("Exercise 1:");
console.log("AsciiCode");
console.log();

function codeAscii(simbole) {
    return simbole.charCodeAt(simbole);
}

console.log(codeAscii("A"));

console.log();
console.log("Exercise 2:");
console.log("Replace the ‘a’ character in the given line with ‘b’.");
console.log();

function changeSimbol(string) {
    let count = 0;
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            newStr += "b";
            count++;
        } else {
            newStr += string[i];
        }

    }
    console.log(newStr + "\n" + "change-->" + count);

}

changeSimbol("asdasfweafewf");

console.log();
console.log("Exercise 3:");
console.log("Remove all digits from the given line.");
console.log();

function deleteNumber(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;

}

console.log(deleteNumber("sadasdas121sad45asd8"));

console.log();
console.log("Exercise 4:");
console.log("A line consisting of two words is given. Move those words in places. Export the resulting line.");
console.log();

function changeWord(arrString) {
    let str = arrString.split(" ");
    let newArray = [];
    let index = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        newArray[index] = str[i];
        index++;

    }
    return newArray;

}

console.log(changeWord("hello word"));

console.log();
console.log("Exercise 5:");
console.log("Write a JavaScript program to pass a 'JavaScript function' as parameter");
console.log();

function sum(x, y) {
    return x + y;
}

function actionNumber(x, y, z) {
    return z(x, y);
}

console.log(actionNumber(5, 6, sum));

console.log();
console.log("Exercise 6:");
console.log("Write a JavaScript function that reverse a number.");
console.log();

//option 1
function reverseNumber(arrayNumber) {
    let arrayString = arrayNumber.toString();
    let arr = [];
    for (let i = arrayString.length - 1; i >= 0; i--) {
        arr.push(arrayString[i]);
    }
    return arr;

}

console.log(reverseNumber(123456));

//option 2
function count_digits(n) {
    let arr = []
    while (n > 0) {
        arr.push(n % 10);
        n = (n - n % 10) / 10;
    }
    return arr;
}

console.log(count_digits(123456));

//option 3
function rev_digits(number) {
    let newNumber = 0;
    while (number !== 0) {
        let last = number % 10;
        newNumber = newNumber * 10 + last;
        number = (number - last) / 10;
    }
    return newNumber;
}

console.log(rev_digits(123456));


console.log();
console.log("Exercise 7:");
console.log("Write a JavaScript function that checks whether a passed string is palindrome or not?  " +
    "A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.");
console.log();

function polyString(string) {
    let strLen = string.length;
    for (let i = 0; i < strLen / 2; i++) {
        if (string[i] !== string[strLen - 1 - i]) {
            return "is not palindrome";
        }
    }
    return "is palindrome";
}

console.log(polyString("ara"));

console.log();
console.log("Exercise 8:");
console.log("Write a JavaScript function that generates all combinations of a string");
console.log();

function combString(string) {
    let arrCombString = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            arrCombString.push(string.slice(i, j));
        }
    }
    return arrCombString;
}

console.log(combString("dog"));

console.log();
console.log("Exercise 9:");
console.log("Write a JavaScript function that returns a passed string with letters in alphabetical order. ");
console.log();

function alphabetSortMethod(str) {
    return str.split("").sort().join("");
}

console.log(alphabetSortMethod("barev"));

console.log();
console.log("Exercise 10:");
console.log(" Write a JavaScript function that accepts a string as a parameter and converts " +
    "the first letter of each word of the string in upper case. ");
console.log();

function startToUpperCase(string) {
    let str = string.split(" ");
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString += str[i].charAt(0).toUpperCase() + str[i].slice(1) + " ";
    }
    return newString;
}

console.log(startToUpperCase("bari aravot bolorin"));


console.log();
console.log("Exercise 11:");
console.log("Write a JavaScript function to clone an array");
console.log();

//option 1
function cloneArray(array) {
    return array.map(elem => elem);
}

console.log(cloneArray([5, 48, 7, 9, 46, 3, 4]));

//option 2
function arrClone(arr) {
    let arrClone = [];
    for (let i = 0; i < arr.length; i++) {
        arrClone.push(arr[i]);
    }
    return arrClone;
}

console.log(arrClone([5, 4, 8, 9, 7, 33, 6, 5]));

console.log();
console.log("Exercise 12:");
console.log("Write a JavaScript function to get the first element of an array. Passing a " +
    "parameter 'n' will return the first 'n' elements of the array");
console.log();

function firstElementArray(array, n) {
    if (n == null) {
        return array[0];
    }

    if (n < 0) {
        return [];
    }

    return array.slice(0, n);

}

console.log(firstElementArray([[], [55, 4, 8, 9, 62, 3], [6, 48, 6, 9, 33]], 2));

console.log();
console.log("Exercise 13:");
console.log("Write a JavaScript function to get the last element of an array. " +
    "Passing a parameter 'n' will return the last 'n' elements of the array.");
console.log();

function lastElementArray(array, n) {
    if (n === null) {
        return array[array.length - 1];
    }
    return array.slice(array.length - n);

}

console.log(lastElementArray([4, 8, 6, 9, 10, 4], 2));
console.log();

console.log();
console.log("Exercise 14:");
console.log("Write a JavaScript program which prints the elements of the following array.");
console.log();

function elementArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("row " + i);
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

}

elementArray([[55, 4, 8, 9], [5, 4, 8, 9, 62, 3], [16, 48, 6, 9, 33], [7, 4, 64, 9, 3]]);


