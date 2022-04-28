let books = [];
let authorNames = ["Valod Karapetyan", "Jivan Karapetyan",
    "Ishxan Grigoryan", "Valod Karapetyan", "Valod Karapetyan",
    "Valod Karapetyan", "Ishxan Grigoryan", "Ishxan Grigoryan",
    "Jivan Karapetyan", "Jivan Karapetyan"];

for (let index = 1; index < 11; index++) {
    let namesArray = authorNames[index - 1].split(" ");
    let book = {
        id: index,
        title: "Title" + index,
        pagesCount: parseInt(Math.random() * 200),
        author: {
            id: parseInt(Math.random() * 10),
            firstName: namesArray[0],
            lastName: namesArray[1],
            birthday: new Date(2000 - Math.random() * 50, Math.random() * 30, Math.random() * 11),
        }
    }
    books.push(book);

}
console.log(books);
console.log("_____________________");
for (const book of books) {
    console.log(book.title + " is " + book.author.firstName);
}
console.log("_____________________");
// let countOfBooks;
// do {
//     countOfBooks = prompt("Please enter count of books");
//
// } while (isNaN(countOfBooks) || countOfBooks < 0 || countOfBooks > 10);
//
// for (let i = 0; i < countOfBooks; i++) {
//     console.log("id: " + books[i].id + ", title: '" + books[i]["title"] + "'");
// }
console.log("_____________________");
for (let i = 0; i < books.length; i++) {
    let author = books[i].author;
    if (author.firstName === "Valod" && author.lastName === "Karapetyan") {
        console.log(books[i].title);
    }
}
console.log("_____________________");
let newbooks = [...books]; // Arrays.from(books)
newbooks = newbooks.filter(book => book.author.firstName === "Valod");
console.log(newbooks);
console.log("_____________________");
for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books.length - 1; j++) {
        if (books[j].author.id > books[j + 1].author.id) {
            [books[j], books[j + 1]] = [books[j + 1], books[j]];
        }
    }
}
console.log(books);
console.log("_____________________");

books.forEach(book => console.log(book.author.firstName + " " + book.author.lastName));

console.log("_____________________");

for (let book of books) {
    let title = book.title[0].toUpperCase() + book.title.substring(1);
    console.log(title);
}
console.log("_____________________");

let totalPageCount = 0;
for (let book of books) {
    totalPageCount += book.pagesCount;
}
console.log(totalPageCount);
console.log("_____________________");
let today = new Date(2022, 4, 16);
for (let book of books) {
    let miliSecond = (Date.parse(today) - Date.parse(book.author.birthday));
    let popoxakan = miliSecond / (3.156e+10);
    console.log(popoxakan);
}
console.log(books);
