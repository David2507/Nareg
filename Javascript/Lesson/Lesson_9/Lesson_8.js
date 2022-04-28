function genScores() {
    return parseInt(Math.random() * (10 - 1) + 1);
}

function student(name, surName, gender) {
    return {
        firstName: name,
        lastName: surName,
        gender: gender,
        subjects: [
            {name: "Maths", scors: genScores()},
            {name: "Physics", scors: genScores()},
            {name: "Geographic", scors: genScores()},
            {name: "Literature", scors: genScores()},
            {name: "Chemistry", scors: genScores()},
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

function superStudent() {
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.scors;
            }
            if (sum / 5 > 5) {
                console.log("Super student -> " + student.firstName);
            }
        }
    }
}

console.log(superStudent());


console.log("__________________________________");
console.log();

function addStudent() {

    school.classes[0].students.push(student("Ashkhen", "Aghanyan", "Female"));
}

addStudent();
console.log(school);

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

console.log(newClasses());


console.log("__________________________________");
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

console.log(femaleStudent());


console.log("__________________________________");
console.log();

function maxScors() {
    let max = 0;
    let maxSt;
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.scors;
            }
            if (sum / 5 > max) {
                max = sum / 5;
                maxSt = student;
                console.log("Max scors student ->", maxSt);
            }
        }
    }


}

console.log(maxScors());

console.log("__________________________________");
console.log();

function getMaleLowestScore() {
    let min = Infinity;
    let minSt;
    for (const clas of school.classes) {
        for (const student of clas.students) {
            let sum = 0;
            for (const studentSubject of student.subjects) {
                sum += studentSubject.scors;
            }
            if (sum / 5 < min) {
                min = sum / 5;
                minSt = student.firstName;

            }

        }
    }
    console.log("Min scors student name ->", minSt);
}

console.log(getMaleLowestScore());

console.log("__________________________________");
console.log();

function countStudent() {
    let count = 0;
    for (const clas of school.classes) {
        count += clas.students.length;

    }
    return count;
}

console.log(countStudent());

console.log("__________________________________");
console.log();

function getMathBiggerChemistry() {
    for (const clas of school.classes) {
        for (const student of clas.students) {
            for (const studentSubject of student.subjects) {
                if (studentSubject[0].scors){
                    // todo change to find
                    

                }

            }
        }
    }
}