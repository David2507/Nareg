// class NumberHelper {
//     constructor(inputNumber) {
//         this.inputNumber = inputNumber;
//     }
//
//     isPrime() {
//         for (let i = 2; i < this.inputNumber; i++)
//             if (this.inputNumber % i === 0) {
//                 return false;
//             }
//         return this.inputNumber > 1;
//     }
//
//     getNumberOfDigits() {
//         let newStr = this.inputNumber.toString();
//         let count = 0;
//         for (let i = 0; i < newStr.length; i++) {
//             if (newStr[i] !== ".") {
//                 count++;
//             }
//         }
//         return count;
//     }
//
//     isFloating() {
//         let newStr = this.inputNumber.toString();
//         for (let i = 0; i < newStr.length; i++) {
//             if (newStr[i] === ".") {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     isPalindrome() {
//         let newString = this.inputNumber.toString();
//         let strLen = newString.length;
//         for (let i = 0; i < strLen / 2; i++) {
//             if (newString[i] !== newString[strLen - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
//
// let number = new NumberHelper(887);
//
// console.log(number.isPrime());
// console.log(number.isFloating());
// console.log(number.getNumberOfDigits());
// console.log(number.isPalindrome());
//
//
// class Employee {
//     constructor(lastName, salary, birthday, employmentYear) {
//         this.lastName = lastName;
//         this.salary = salary;
//         this.birthday = birthday;
//         this.empYear = employmentYear;
//     }
//
//     getExperience() {
//         return Math.floor((Date.parse(new Date()) - Date.parse(this.empYear)) / (3.156e+10));
//     }
//
//     getExperienceInDays() {
//         return this.getExperience() * 365;
//     }
//
//     getAge() {
//         return Math.floor((Date.parse(new Date()) - Date.parse(this.birthday)) / (3.156e+10));
//     }
//
//     getDaysUntilRetirement() {
//         return (65 - this.getAge()) * 365;
//     }
//
// }
//
// let employe = new Employee("Karapetyan", 250000, new Date(1984, 4, 25), 2010);
//
// console.log("Experience --> " + employe.getExperience() + " year");
// console.log("Day --> " + employe.getExperienceInDays());
// console.log("Age --> " + employe.getAge());
// console.log("Remains " + employe.getDaysUntilRetirement() + " days from retirement");
//
// class Programmer extends Employee {
//     constructor(junior, mid, senior) {
//         super();
//         this.level = level;
//     }
//
// }
//
// let programmers = ["Karapetyan", "Hovhanisyan", "Mkhitaryan", "Galstyan", "Minasyan", "Tonoyan"];
// let simpleEmployees = ["Paronyan", "Grigoryan", "Hayrapetyan", "Avetisyan", "Papikyan"];
// let employees = [[...programmers], [...simpleEmployees]];
//
// class Office {
//     constructor(name, address, employees) {
//         this.name = name;
//         this.address = address;
//         this.employ = employees;
//     }
//
//     returnProgrammers() {
//         return [...this.employ[0]];
//     }
//
//     returnSimpleEmployees() {
//         return [...this.employ[1]];
//     }
//
//     returnJunior() {
//         let junior = [];
//         for (let i = 0; i < this.returnProgrammers().length; i++) {
//             junior.push(this.returnProgrammers()[i]);
//             if (i === 1) {
//                 break;
//             }
//         }
//         return junior;
//     }
//
//     returnMid() {
//         let mid = [];
//         for (let i = 2; i < this.returnProgrammers().length; i++) {
//             mid.push(this.returnProgrammers()[i]);
//             if (i === 3) {
//                 break;
//             }
//         }
//         return mid;
//     }
//
//     returnSenior() {
//         let senior = [];
//         for (let i = 4; i < this.returnProgrammers().length; i++) {
//             senior.push(this.returnProgrammers()[i]);
//             if (i === 5) {
//                 break;
//             }
//         }
//         return senior;
//     }
// }
//
// let office = new Office("officeName","jhdfjs",employees);
// console.log("Programmers --> " + office.returnProgrammers());
// console.log("Simple employees --> " + office.returnSimpleEmployees());
// console.log("Junior programmer --> " + office.returnJunior());
// console.log("Mid programmer --> " + office.returnMid());
// console.log("Senior programmer --> " + office.returnSenior());


class Stack {
    array = [];

    myPush(elem) {
        this.array.push(elem);
        return this.array;
    }

    myPop() {
        return this.array = this.array[this.array.length - 1];
    }

    myTop() {
        return this.array[this.array.length - 1];

    }

    mySize() {
        return this.array.length;

    }

    isEmpty() {
        return this.array.length === 0;
    }

}

let myStack = new Stack();

class Queue {
    arr = [];

    enqueue(e) {
        this.arr.push(e);
        return this.arr;
    }

    dequeue() {
        return this.array = this.array[0];
    }

    firstElem() {
        return this.arr[0];

    }

    newSize() {

    }

    isEmpty() {
        return this.arr.length === 0;
    }

}




