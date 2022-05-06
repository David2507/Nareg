let admin = {
    name: "Davit",
    surname: "Minasyan",
    username: "Nareg",
    password: "1234",
    balance: 1000000,
    possibility: 0,

    infoRetirees: [{
        name: "Vazgen",
        surname: "Kirakosyan",
        age: 70,
        balance: 0,
        card: 220481812554001,
        id: 1,
    },
        {
            name: "Armen",
            surname: "Grigoryan",
            age: 64,
            balance: 0,
            card: 220481812554002,
            id: 2,
        },
        {
            name: "Hrach",
            surname: "Mamikonyan",
            age: 88,
            balance: 0,
            card: 220481812554003,
            id: 3,
        },
        {
            name: "Karine",
            surname: "Smbatyan",
            age: 78,
            balance: 0,
            card: 220481812554004,
            id: 4,
        },
        {
            name: "Meline",
            surname: "Daluzyan",
            age: 90,
            balance: 0,
            card: 220481812554005,
            id: 5,
        },
    ],
};

function loginSystem() {
    let Username = prompt("Username: ");
    let Password = prompt("Password: ");
    if (Username === admin.username && Password === admin.password) {
        alert("You have successfully logged in system :)");
        menuCommand();
    } else {
        admin.possibility++;
        if (admin.possibility === 3) {
            alert("You can not log in system :(");
            return;
        }
        loginSystem();
    }
}

function balance() {
    return admin.balance;
}

function find() {
    let viewOrPayCommand = prompt("Enter command: 1: VIEW, 2: PAY");
    if (viewOrPayCommand === "VIEW") {
        let retireeInfo = view();
        if (retireeInfo === -1) {
            menuCommand();
        }
        let payOrMenuCommand = prompt("Enter command: 1: PAY, 2: MAIN MENU");
        if (payOrMenuCommand === "PAY") {
            pay();
            console.log(admin);
        } else if (payOrMenuCommand === "MAIN MENU") {
            menuCommand();
        } else {
            alert("Try selecting command again");
            menuCommand();
        }
    } else if (viewOrPayCommand === "PAY") {
        pay();
        console.log(admin);
    } else {
        alert("Try selecting command again.");
        menuCommand();
    }
}

function menuCommand() {
    let command = prompt("Enter command: 1: FIND, 2: ADD, 3: DELETE, 4: BALANCE,5:LIST 6: EXIT");
    switch (command) {
        case "FIND":
            find();
            break;
        case "ADD":
            add();
            break;
        case "DELETE":
            deleteRetiree();
            break;
        case "BALANCE":
            alert("Balance: " + balance());
            menuCommand();
            break;
        case "LIST":
            console.log(retries());
            alert("Please enter the console to view the list of retirement.")
            menuCommand();
            break;
        case "EXIT":
            alert("Log out -> Thank you for using our services, welcome again :)");
            return;
        default:
            alert("Try selecting command again.");
            menuCommand();
            break;
    }
}

function view() {
    let name = prompt("Enter name of retiree: ");
    let surname = prompt("Enter surname of retiree: ");
    let newList = [];
    let infoRetirees = admin.infoRetirees;
    for (const retiree of infoRetirees) {
        if (name === retiree.name && surname === retiree.surname) {
            newList.push(retiree);
        }
    }
    if (newList.length === 0) {
        alert("Name or surname is incorrect, please enter the correct information.");
    } else {
        for (const retiree of newList) {
            alert("name: " + retiree.name + "\n"
                + "surname: " + retiree.surname + "\n"
                + "age: " + retiree.age + "\n"
                + "balance: " + retiree.balance + "\n"
                + "card: " + retiree.card);
        }
    }
}

function pay() {
    let card = +prompt("Enter card number: ");
    let infoRetirees = admin.infoRetirees;
    let currentRetiree = {};
    for (const retiree of infoRetirees) {
        if (card === retiree.card) {
            currentRetiree = retiree;
            break;
        }
    }
    if (currentRetiree === undefined) {
        alert("Please try again");
    } else {
        let pox = +prompt("Please enter the amount to be transferred․");
        if (pox > admin.balance) {
            alert("The balance is not enough to pay");
        } else {
            currentRetiree.balance += pox;
            admin.balance -= currentRetiree.balance;
            menuCommand()
        }
    }
}

function createRetiree(newName, newSurname, newAge, newCard) {
    let infoRetirees = admin.infoRetirees;
    let newId = infoRetirees[infoRetirees.length - 1].id + 1;
    return {
        name: newName,
        surname: newSurname,
        age: newAge,
        balance: 0,
        id: newId,
        card: newCard,
    }
}

function add() {
    let newName = prompt("Enter name of new retiree: ");
    let newSurname = prompt("Enter surname of new retiree: ");
    let newAge = +prompt("Enter age of new retiree: ");
    let newCard = +prompt("Enter cardNumber of new retiree: ");
    let balance = 0;
    let newRetiree = createRetiree(newName, newSurname, newAge, newCard, balance);
    admin.infoRetirees.push(newRetiree);
    alert("New retiree added :)" + "\n"
        + "name: " + newRetiree.name + "\n"
        + "surname: " + newRetiree.surname + "\n"
        + "age: " + newRetiree.age + "\n"
        + "balance: " + newRetiree.balance + "\n"
        + "card: " + newRetiree.card);
    menuCommand();
}

function deleteRetiree() {
    let id = +prompt("Enter the id number of retiree, which you want to delete: ");
    let infoRetirees = admin.infoRetirees;
    let deleteRetiree;
    for (const retiree of infoRetirees) {
        if (retiree.id === id) {
            deleteRetiree = retiree;
            break;
        }

    }
    if (deleteRetiree === undefined) {
        alert("The given id does not exist.");
    } else {
        infoRetirees.splice(infoRetirees.indexOf(deleteRetiree), 1);

        alert("Retiree deleted.");
    }
    menuCommand();
}

function retries() {
    let list = admin.infoRetirees;
    let retries = "";
    for (const retire of list) {
        retries += ("name: " + retire.name + "\n"
            + "surname: " + retire.surname + "\n"
            + "age: " + retire.age + "\n"
            + "balance: " + retire.balance + "\n"
            + "id: " + retire.id + "\n"
            + "card number: " + retire.card + "\n"
            + "--------------------------->" + "\n");
    }
    return retries;
}

loginSystem();