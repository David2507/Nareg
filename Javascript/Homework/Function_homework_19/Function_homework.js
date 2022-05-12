//1
function codeAsci(simbole) {
    return simbole.charCodeAt(simbole);
}

console.log(codeAsci("A"));

//2
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

//3
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

//4
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

//5
function sum(x, y) {
    return x + y;
}

function actionNumber(x, y, z) {
    return z(x, y);
}

console.log(actionNumber(5, 6, sum));

//6
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


//7
function polyString(string) {
    let strLen = string.length;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[strLen - 1 - i]) {
            return "is not palindrome";
        }
    }
    return "is palindrome";
}

console.log(polyString("ara"));

//8
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

//9
function alphabetSortMethod(str) {
    return str.split("").sort().join("");
}

console.log(alphabetSortMethod("barev"));

//10
function startToUpperCase(string) {
    let str = string.split(" ");
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString += str[i].charAt(0).toUpperCase() + str[i].slice(1) + " ";
    }
    return newString;
}

console.log(startToUpperCase("bari aravot bolorin"));


//11
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

//12
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

//13
function lastElementArray(array, n) {
    if (n === null) {
        return array[array.length - 1];
    }
    return array.slice(array.length - n);

}

console.log(lastElementArray([4, 8, 6, 9, 10, 4], 2));
console.log();

//14
function elementArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("row " + i);
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }

}

elementArray([[55, 4, 8, 9], [5, 4, 8, 9, 62, 3], [16, 48, 6, 9, 33], [7, 4, 64, 9, 3]]);

