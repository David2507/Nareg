function genScores() {
    return parseInt(Math.random() * (10 - 1) + 1);
}

function student(name, surName, gender) {
    return {
        firstName: name,
        lastName: surName,
        gender: gender,
        subjects: [
            {name: "Maths", score: genScores()},
            {name: "Physics", score: genScores()},
            {name: "Geographic", score: genScores()},
            {name: "Literature", score: genScores()},
            {name: "Chemistry", score: genScores()},
        ],
    };
}

function createSchool() {
    let firstClass = {
        teacher: "Anahit Xurshudyan",
        students: [student("Karen", "Petrosyan", "Male"),
            student("Anna", "Grigoryan", "Female"),
            student("Armen", "Movsisyan", "Male"),
            student("Vahagn", "Mirzoyan", "Male"),
        ],
    }
    let secondClass = {
        teacher: "Karen Matevosyan",
        students: [student("Ashkhen", "Aghanyan", "Female"),
            student("Gevorg", "Esayan", "Male"),
            student("Qnarik", "Simonyan", "Female"),
            student("Vahan", "Mamikonyan", "Male")
        ]
    }
    let school = {
        name: "Politexnik",
        classes: [firstClass, secondClass],
    }
    return school;
}


let school = createSchool();

console.log("Exercise 1:");
console.log("Write a function which will recive name and last name and will return student.");
console.log();

function returnStudent(name, surname) {
    for (let i = 0; i < school.classes.length; i++) {
        for (let j = 0; j < school.classes[i].students.length; j++) {
            if (school.classes[i].students[j].firstName === name && school.classes[i].students[j].lastName === surname) {
                return school.classes[i].students[j];
            }
        }
    }

}

console.log(returnStudent("Anna", "Grigoryan"));
console.log();
console.log("Exercise 2:");
console.log("Write a function which will find all students whose middle of score is higher than 8. ");
console.log();

function superStudent() {
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.score;
            }
            if (sum / 5 > 8) {
                console.log("Super student -> " + student.firstName);
            }
        }
    }
}

superStudent();

console.log();
console.log("Exercise 3:");
console.log("Write a function which will add new student in 1st class ");
console.log();

function addStudent() {
    school.classes[0].students.push(student("Ashkhen", "Aghanyan", "Female"));
}

addStudent();
console.log(school);
console.log();
console.log("Exercise 4:");
console.log("Add a new class. ");
console.log();

function newClasses() {
    let thirdClass = {
        teacher: "Ruzan Xachatryan",
        students: [student("Astghik", "Poghosyan", "Female"),
            student("Emil", "Stambulyan", "Male"),
            student("Monika", "Simonyan", "Female"),
            student("Martin", "Gasparyan", "Male"),
            student("Vileta", "Xalatova", "Female"),
        ]
    }
    school.classes.push(thirdClass);
}

newClasses();

console.log();
console.log("Exercise 5:");
console.log("Write a function which will find all female students ");
console.log();

function femaleStudent() {
    for (const clas of school.classes) {
        for (const student of clas.students) {
            if (student.gender === "Female") {
                console.log(student);
            }
        }
    }
}

femaleStudent()

console.log();
console.log("Exercise 6:");
console.log("Write a function which will return the student whose score is the highest.");
console.log();

function maxScors() {
    let max = 0;
    let maxSt;
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.score;
            }
            if (sum / 5 > max) {
                max = sum / 5;
                maxSt = student;
                console.log("Max scors student ->", maxSt);
            }
        }
    }
}

maxScors();

console.log();
console.log("Exercise 7:");
console.log("Write a function which will print name of male student  from 2nd class whose  score is the lowest");
console.log();

function getMaleLowestScore() {
    let min = Infinity;
    let minSt;
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.score;
            }
            if (sum / 5 < min) {
                min = sum / 5;
                minSt = student.firstName;
            }
        }
    }
    console.log("Min scors student name ->", minSt);
}

getMaleLowestScore();

console.log();
console.log("Exercise 8:");
console.log("Write function which will calculate count of  students");
console.log();

function countStudent() {
    let count = 0;
    for (const clas of school.classes) {
        count += clas.students.length;
    }
    return count;
}

console.log(countStudent());

console.log();
console.log("Exercise 9:");
console.log("Write function which will get all students which score from maths is bigger then score of Chemistry.");
console.log();

function getMathBiggerChemistry() {
    let listStudent = [];
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let matIndex = {};
            let chemIndex = {};
            for (const studentSubject of student.subjects) {
                if (studentSubject.name === "Maths") {
                    matIndex = studentSubject;
                }
                if (studentSubject.name === "Chemistry") {
                    chemIndex = studentSubject;
                }
                if (matIndex.score > chemIndex.score) {
                    listStudent.push(student);
                }
            }
        }
    }
    return listStudent;
}

console.log(getMathBiggerChemistry());

console.log();
console.log("Exercise 10:");
console.log("Write function which receive subject name and will return the student " +
    "from each class who has highest score from given subject ");
console.log();

function getHighestScoreStudentBySubName(subjectName) {
    for (const clas of school.classes) {
        let max = 0;
        let newStudent = {};
        for (const student of clas.students) {
            for (const studentSubject of student.subjects) {
                if (studentSubject.name === subjectName && studentSubject.score > max) {
                    max = studentSubject.score;
                    newStudent = student;
                }
            }
        }
        console.log(newStudent);
    }
}

getHighestScoreStudentBySubName("Maths");

console.log();
console.log("Exercise 11:");
console.log("Write function which will print all subject names and the 2 student with highest score which this subject.");
console.log();

function listStudent() {
    let listStudent = [];
    for (const clas of school.classes) {
        for (const student of clas.students) {
            listStudent.push(student);
        }
    }
    return listStudent;

}

function arrTwoStudentSubject(subject) {
    let students = listStudent();
    let arrStudent = [];
    for (let score = 9; score >= 1; score--) {
        for (const student of students) {
            for (const sub of student.subjects) {
                if (sub.name === subject && sub.score === score) {
                    arrStudent.push(student);
                }
            }
        }
    }
    let arrTwoStudent = [];
    arrTwoStudent.push(arrStudent[0], arrStudent[1]);
    return arrTwoStudent;
}

for (let i = 0; i < school.classes.length; i++) {
    for (const student of school.classes[i].students) {
        student.clas = "class " + (i + 1);
    }
}

function twoStudentAllSubjects() {
    let twoStudentOfMaths = arrTwoStudentSubject("Maths");
    console.log("Maths" + "\n" + "1." + twoStudentOfMaths[0].firstName + " from " + twoStudentOfMaths[0].clas
        + "\n" + "2." + twoStudentOfMaths[1].firstName + " from " + twoStudentOfMaths[1].clas);
    let twoStudentOfPhysics = arrTwoStudentSubject("Physics");
    console.log("Physics" + "\n" + "1." + twoStudentOfPhysics[0].firstName + " from " + twoStudentOfPhysics[0].clas
        + "\n" + "2." + twoStudentOfPhysics[1].firstName + " from " + twoStudentOfPhysics[1].clas);
    let twoStudentOfGeographic = arrTwoStudentSubject("Geographic");
    console.log("Geographic" + "\n" + "1." + twoStudentOfGeographic[0].firstName + " from " + twoStudentOfGeographic[0].clas
        + "\n" + "2." + twoStudentOfGeographic[1].firstName + " from " + twoStudentOfGeographic[1].clas);
    let twoStudentOfLiterature = arrTwoStudentSubject("Literature");
    console.log("Literature" + "\n" + "1." + twoStudentOfLiterature[0].firstName + " from " + twoStudentOfLiterature[0].clas
        + "\n" + "2." + twoStudentOfLiterature[1].firstName + " from " + twoStudentOfLiterature[1].clas);
    let twoStudentOfChemistry = arrTwoStudentSubject("Chemistry");
    console.log("Chemistry" + "\n" + "1." + twoStudentOfChemistry[0].firstName + " from " + twoStudentOfChemistry[0].clas
        + "\n" + "2." + twoStudentOfChemistry[1].firstName + " from " + twoStudentOfChemistry[1].clas);
}

twoStudentAllSubjects();
