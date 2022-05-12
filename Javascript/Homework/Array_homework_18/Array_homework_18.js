console.log("Exercise 3:");
console.log("Create array which contains 1..1509 numbers");
console.log();

function arrCount(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(arrCount(80));

console.log();
console.log("Exercise 4:");
console.log("Create array which elements are all fibonacci numbers");
console.log();

function fibNumber(n) {
    let fib = [];
    let first = 0;
    let second = 1;
    let next;

    for (let i = 0; i < n; i++) {
        fib.push(first);
        next = first + second;
        first = second;
        second = next;
    }
    return fib;
}

console.log(fibNumber(8));

console.log();
console.log("Exercise 5:");
console.log("Get a new array whose elements are all even number from last problem’s array.");
console.log();

function fibEven(n) {
    let arr = fibNumber(n);
    let newArray = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(fibEven(8));

console.log();
console.log("Exercise 6:");
console.log("Reverse array (1whit reverse ,without reverse)");
console.log();

function reversArray(array) {
    array.reverse();
    return array;
}

console.log(reversArray([5, 4, 87, 7, 49, 926, 12]));

function revArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(revArr([5, 4, 87, 7, 49, 926, 12]));

console.log();
console.log("Exercise 7:");
console.log("Define a function called cleanNames that accepts an array of strings containing additional " +
    "space characters at the beginning and end. The cleanNames() function should use the array map method " +
    "to return a new array full of trimmed names. For example:");
console.log();

function myMap(arrNames) {
    return arrNames.map(element => element.trim());
}

console.log(myMap(["  asdsad  asdsad", "  asdsad  asdsad  ", "  asdsad  asdsad  ", "  asdsad  asdsad  "]));

console.log();
console.log("Exercise 8:");
console.log("Write a function that converts an array of values from miles to kilometres using the map method. " +
    "In the end, add the kilometres up in a new variable called 'totalDistanceInKilometers' and return this variable.");
console.log();

function convertsValue(array) {
    return array.map(elem => elem * 1.60934);

}

console.log(convertsValue([1, 2, 3, 4, 5, 6, 7, 8]));

console.log();
console.log("Exercise 9:");
console.log("Square and sum the array elements.");
console.log();

function squareSum(array) {
    let newArray = array.map(elem => elem * elem);
    return newArray.reduce((x, y) => x + y);

}

console.log(squareSum([1, 2, 3, 4, 5, 6, 7, 8]));

console.log();
console.log("Exercise 10:");
console.log("From the array of numbers, choose prime numbers");
console.log();

function primeNumbers(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}

console.log(primeNumbers(50));

function arrPrimeNumber(array) {
    let newArray = [];
    array.forEach(function (element) {
        let isPrim = primeNumbers(element);
        if (isPrim) {
            newArray.push(element);
        }

    });
    return newArray;
}

console.log(arrPrimeNumber([5, 4, 87, 7, 11, 15, 12]));

console.log();
console.log("Exercise 11:");
console.log("Get new array where all words lengths greater or equal 6");
console.log();

function wordsLenghtSix(wordArray) {
    let newArr = [];
    wordArray.forEach(function (elem) {
        if (elem.length >= 6) {
            newArr.push(elem);
        }
    })
    return newArr;

}

console.log(wordsLenghtSix(["asdasdasd", "asdas", "asdasdasdsad", "sdd"]));

console.log();
console.log("Exercise 12:");
console.log("Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.");
console.log();

function myFunc(arr) {
    return arr.map(elem => elem * 2);

}

console.log(myFunc([5, 4, 87, 7, 11, 15, 12]));

console.log();
console.log("Exercise 13:");
console.log("Merge Arrays");
console.log();

function mergeArrays(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            newArray.push(...arr[j]);
            arr[j] = [];
        }
    }
    return newArray;
}

console.log(mergeArrays([[5, 4, 8, 7], [4, 8, 7, 9, 8], [5, 4, 87, 7, 11, 15, 12]]));

console.log();
console.log("Exercise 14:");
console.log("Find The Largest or Smallest Number");
console.log();

function minAndMaxNumber() {
    let max = Math.max(5, 4, 87, 7, 11, 15, 12);
    let min = Math.min(5, 4, 87, 7, 11, 15, 12);
    console.log("Max number --> " + max + "\n" + "Min number --> " + min);
}

minAndMaxNumber();


