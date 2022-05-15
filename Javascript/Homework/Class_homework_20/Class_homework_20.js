class NumberHelper {
    constructor(inputNumber) {
        this.inputNumber = inputNumber;
    }

    isPrime() {
        for (let i = 2; i < this.inputNumber; i++)
            if (this.inputNumber % i === 0) {
                return false;
            }
        return this.inputNumber > 1;
    }

    getNumberOfDigits() {
        let newStr = this.inputNumber.toString();
        let count = 0;
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] !== ".") {
                count++;
            }
        }
        return count;
    }

    isFloating() {
        let newStr = this.inputNumber.toString();
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] === ".") {
                return true;
            }
        }
        return false;
    }

    isPalindrome() {
        let newString = this.inputNumber.toString();
        let strLen = newString.length;
        for (let i = 0; i < strLen / 2; i++) {
            if (newString[i] !== newString[strLen - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

let number = new NumberHelper(887);

console.log(number.isPrime());
console.log(number.isFloating());
console.log(number.getNumberOfDigits());
console.log(number.isPalindrome());


class Employee {
    constructor(lastName, salary, birthday, employmentYear) {
        this.lastName = lastName;
        this.salary = salary;
        this.birthday = birthday;
        this.empYear = employmentYear;
    }
    getExperience() {
        return Math.floor((Date.parse(new Date()) - Date.parse(this.empYear)) / (3.156e+10));
    }

    getExperienceInDays() {
        return this.getExperience() * 365;
    }

    getAge() {
        return Math.floor((Date.parse(new Date()) - Date.parse(this.birthday)) / (3.156e+10));
    }

    getDaysUntilRetirement() {
        return (65 - this.getAge()) * 365;
    }

}

let employe = new Employee("Karapetyan", 250000, new Date(1984, 4, 25), 2010);

console.log("Experience --> " + employe.getExperience() + " year");
console.log("Day --> " + employe.getExperienceInDays());
console.log("Age --> " + employe.getAge());
console.log("Remains " + employe.getDaysUntilRetirement() + " days from retirement");

class Programmer extends Employee {
    constructor(junior, mid, senior) {
        super();
        this.junior = junior;
        this.mid = mid;
        this.senior = senior;
    }

}

let programmers = ["Karapetyan", "Hovhanisyan", "Mkhitaryan", "Galstyan", "Minasyan", "Tonoyan"];
let simpleEmployees = ["Paronyan", "Grigoryan", "Hayrapetyan", "Avetisyan", "Papikyan"];

class Office {
    constructor(name, address, employees) {
        employees = [[...programmers], [...simpleEmployees]];
        this.name = name;
        this.address = address;
        this.employ = employees;
    }

    returnProgrammers() {
        return [...this.employ[0]];
    }

    returnSimpleEmployees() {
        return [...this.employ[1]];
    }

    // returnJunior() {
    //     return programmerObj.junior;
    // }
    //
    // returnMid() {
    //     return programmerObj.mid;
    // }
    //
    // returnSenior() {
    //     return programmerObj.senior;
    // }
}

let office = new Office();
console.log("Programmers --> " + office.returnProgrammers());
console.log("Simple employees --> " + office.returnSimpleEmployees());