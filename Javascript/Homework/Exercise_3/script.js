/**
 * Exercise 1.
 * Write a parameter function that gets 2 parameter arrays with 4 elements and returns a new array whose members are
 * the sum of the members of the received arrays. use function declaration:
 */

console.log("Exercise 1. ");
console.log();

function sumArrayElement(arr1, arr2) {
    let newArray = [];
    newArray[0] = arr1[0] + arr2[0];
    newArray[1] = arr1[1] + arr2[1];
    newArray[2] = arr1[2] + arr2[2];
    newArray[3] = arr1[3] + arr2[3];
    return newArray;
}

console.log(sumArrayElement([25, 48, 58, 9], [9, 2, 47, 5]));


console.log("_________________________");
console.log();
/**
 * Exercise 2.
 * Write a parameter function that gets 2 parameter arrays with 4 elements and returns a new array whose members are
 * the difference between the members of the received arrays․ use function expression.
 */

console.log("Exercise 2. ");
console.log();

let differenceArrayElement = function (arr1, arr2) {
    let newArray = [];
    newArray[0] = arr1[0] - arr2[0];
    newArray[1] = arr1[1] - arr2[1];
    newArray[2] = arr1[2] - arr2[2];
    newArray[3] = arr1[3] - arr2[3];
    return newArray;
}

console.log(differenceArrayElement([25, 48, 58, 9], [9, 2, 47, 5]));

console.log("_________________________");
console.log();

/**
 * Exercise 3.
 * Write a parameter function that gets 2 parameter arrays with 4 elements and returns a new array whose members are
 * the product of the members of the received arrays․ use function expression
 */

console.log("Exercise 3. ");
console.log();

let multiplicationArrayElement = function (arr1, arr2) {
    let newArray = [];
    newArray[0] = arr1[0] * arr2[0];
    newArray[1] = arr1[1] * arr2[1];
    newArray[2] = arr1[2] * arr2[2];
    newArray[3] = arr1[3] * arr2[3];
    return newArray;
}

console.log(multiplicationArrayElement([25, 48, 58, 9], [9, 2, 47, 5]));

console.log("_________________________");
console.log();
/**
 * Exercise 4.
 * Write a parametric function that gets 2 parameters - 1. object 2. string - some color․
 * And returns an object whose color is the color transferred to the property.
 */

console.log("Exercise 4. ");
console.log();

function objectString(string) {
    let apple = {
        color: string,
    }
    return apple;
}

console.log(objectString("green"));

console.log("_________________________");
console.log();

/**
 * Exercise 5.
 * Write a parametric function that gets 3 parameter arrays and returns a new array
 * whose elements are the lengths of the transmitted arrays.
 */

console.log("Exercise 5. ");
console.log();

function newArrayElementLength(arr1, arr2, arr3) {
    let newArray = [];
    let firstArrayLength = arr1.length;
    let secondArrayLength = arr2.length;
    let thirdArrayLength = arr3.length;
    newArray[0] = firstArrayLength;
    newArray[1] = secondArrayLength;
    newArray[2] = thirdArrayLength;
    return newArray;

}

console.log(newArrayElementLength([25, 48, 45, 84, 58, 9], [9, 2, 47, 5], [54, 9, 999, 6, 9, 55, 7, 84, 6]))


console.log("_________________________");
console.log();

/**
 * Exercise 6.
 * Write a parameter function that gets 1 parameter object and returns an array of object values.
 */

console.log("Exercise 6. ");
console.log();

function objectElementInArray() {
    let array = [];
    let person = {
        name: "Karen",
        surName: "Martirosyan",
        age: 25,
        height: 175,
        weight: 80
    }
    array[0] = person.name;
    array[1] = person.surName;
    array[2] = person.age;
    array[3] = person.height;
    array[4] = person.weight;
    return array;
}

console.log(objectElementInArray());


console.log("_________________________");
console.log();
/**
 * Exercise 7.
 * Write a parametric function that gets 1 parameter object (orinak - const obj = {arr1: [1,2,3,4,5], arr2: [5,4,3,2,1],
 * arr3: [4 , 8,9, 34,123]}): The object consists of three arrays. returns a new array,
 * each member of which is the sum of the members of those arrays.
 */

console.log("Exercise 7. ");
console.log();

function sumObjectArrayElement() {
    let array = [];
    const obj = {
        arr1: [1, 2, 3, 4, 5],
        arr2: [5, 4, 3, 2, 1],
        arr3: [4, 8, 9, 34, 123]
    }
    let arr1Sum = obj.arr1[0] + obj.arr1[1] + obj.arr1[2] + obj.arr1[3] + obj.arr1[4];
    let arr2Sum = obj.arr2[0] + obj.arr2[1] + obj.arr2[2] + obj.arr2[3] + obj.arr2[4];
    let arr3Sum = obj.arr3[0] + obj.arr3[1] + obj.arr3[2] + obj.arr3[3] + obj.arr3[4];
    array[0] = arr1Sum;
    array[1] = arr2Sum;
    array[2] = arr3Sum;
    return array;
}

console.log(sumObjectArrayElement());


console.log("_________________________");
console.log();
/**
 * Exercise 8.
 * Write a parametric function that gets two parameters and returns the sum.
 * In case of not receiving the second parameter, the first one is added to twenty.
 */

console.log("Exercise 8. ");
console.log();

function dataTypeObject(string, number, boolean, undefined, Null, symbol) {
    let type = {
        String: string,
        Number: number,
        boolean: boolean,
        undefined: undefined,
        Null: null,
        symbol: symbol,

    }
    return type;

}

console.log(dataTypeObject("Karen", 25, true, undefined, null, 'A'));


console.log("_________________________");
console.log();
/**
 * Exercise 9.
 * Write a parametric function that takes 2 parameter objects and returns a new object consisting of those objects.
 */

console.log("Exercise 9. ");
console.log();
let person = {
    name: "Armen",
    surName: "Kirakosyan",
    age: 25,
    height: 187,
    weight: 90
}
let person1 = {
    name: "Anna",
    surName: "Poghosyan",
    age: 22,
    height: 168,
    weight: 50
}

function twoObjects(object1, object2) {
    let newObject = {
        first: object1,
        second: object2,
    }
    return newObject;

}

console.log(twoObjects(person, person1));


console.log("_________________________");
console.log();

/**
 * Exercise 10.
 * Write a parameter function that gets 2 parameter objects and returns a new object,
 * the 2nd object nested in the first one.
 */

console.log("Exercise 10. ");
console.log();

let person2 = {
    name: "Ara",
    surName: "Piliposyan",
    age: 25,
    height: 185,
    weight: 80
}
let person3 = {
    name: "Anahit",
    surName: "Valesyan",
    age: 26,
    height: 168,
    weight: 50
}

function twoObjectNested(object1, object2) {
    let newObject = {
        nested: {
            object1, object2
        }
    }
    return newObject;

}

console.log(twoObjectNested(person2, person3));




