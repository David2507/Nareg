/**
 * Exercise Ա.
 * Write a function that gets 2 parameters. The first parameter is an array with 5 elements,
 * the second parameter is a mathematical operator string type (for example "+" or "-" or "*" or "/").
 * Depending on the value of the operator, the function performs the corresponding operation and returns the sum
 * of the elements of the array, the difference, the product, the quotient (if “/” -> res = arr [0] / arr [1]).
 * if no one is equal to the operator, f returns null;
 */

console.log("Exercise 1. ");
console.log();

function calculator(array, operator) {
    let result = 0;
    if (operator === "+") {
        result = array[0] + array[1] + array[2] + array[3] + array[4];
    } else if (operator === "-") {
        result = array[0] - array[1] - array[2] - array[3] - array[4];
    } else if (operator === "*") {
        result = array[0] * array[1] * array[2] * array[3] * array[4];
    } else if (operator === "/") {
        result = array[0] / array[1] / array[2] / array[3] / array[4];
    } else {
        return null;
    }
    return result;
}

console.log("The result of the calculator ---> " + calculator([25, 48, 58, 9, 2], "*"));


console.log("_________________________");
console.log();
/**
 * Exercise Բ.
 * Write a function that gets 2 parameters. The first parameter is an object, the second parameter is of type string.
 * The function attaches the 2nd parameter to each value of the object and returns the object.
 */

console.log("Exercise 2. ");
console.log();

let person = {
    name: "Karen",
    surName: "Martirosyan",
    age: 25,
    height: 175,
    weight: 80
}

function addObjectElement(object, string) {
    object.name += string;
    object.surName += string;
    object.age += string;
    object.height += string;
    object.weight += string;
    return object;
}

console.log(addObjectElement(person, "+"));

console.log("_________________________");
console.log();

/**
 * Exercise Գ.
 * Write a function that gets 2 parameters. The first parameter is an array, the second parameter is of the boolean type.
 * If the second parameter is true, function returns every element of the array with an enlarged one,
 * otherwise it decreases with a reduced one.
 */

console.log("Exercise 3. ");
console.log();

function arrayOne(array, boolean) {
    for (let i = 0; i < array.length; i++) {
        if (boolean === true) {
            array[i] = array[i] + 1;
        } else {
            array[i] = array[i] - 1;
        }
    }
    return array;
}

console.log(arrayOne([25, 48, 58, 9, 2], false));

console.log("_________________________");
console.log();

function arrayOnee(array, boolean) {
        if (boolean === true) {
            array[0] = array[0] + 1;
            array[1] = array[1] + 1;
            array[2] = array[2] + 1;
            array[3] = array[3] + 1;
            array[4] = array[4] + 1;
        } else {
            array[0] = array[0] - 1;
            array[1] = array[1] - 1;
            array[2] = array[2] - 1;
            array[3] = array[3] - 1;
            array[4] = array[4] - 1;
        }
    return array;
}

console.log(arrayOnee([25, 48, 58, 9, 2], true));

/**
 * Exercise Դ.
 * Write a function that gets 2 parameters. The first parameter is number, the second parameter is of string
 * type (‘dollar’, ‘dram’, ‘rubli’, ‘evro’). And depending on the value of the money,
 * it calculates the amount at the given exchange rate and returns the value.
 */

console.log("Exercise 4. ");
console.log();

function changeMoney(number, string) {
    let result = 0;
    if (string === "dram") {
        result = number;
    } else if (string === "dollar") {
        result = number / 483;
    } else if (string === "rub") {
        result = number / 7.25;

    } else if (string === "euro") {
        result = number / 543;

    } else {
        return "I can not calculate the currency";
    }
    return result + " " + string;
}

console.log(changeMoney(7250, "rub"));