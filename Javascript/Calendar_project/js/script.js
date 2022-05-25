//Օր,ամիս,տարի ----> ՎԵՐՋՆԱԿԱՆ

let root = document.querySelector("#root");
let days = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dectember"];
const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let wDays = days.getDay(); // this weeks day 0-6
let mList = days.getMonth(); // this month 0-11
let mDays = days.getDate(); // this Day 1-31
let yDays = days.getFullYear(); // this year 2022


function createCalendar(elem, year, month) {
    let arr = [];
    let mon = month - 1;
    let day = new Date(year, mon);
    let table = '<table><tr class="days"><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';
    for (let i = 0; i < getDay(day); i++) {  //0-6
        table += '<td></td>';
        arr.push(1);
    }
    while (day.getMonth() === mon) {
        arr.push(1);
        if (arr.length > 5) {
            table += '<td onclick="note(this)"  class="weekend"><textarea class = "comment" contenteditable = "true"></textarea>' + day.getDate() + '</td>';
        } else {
            table += '<td onclick="note(this)"><textarea class = "comment" contenteditable = "true"></textarea>' + day.getDate() + '</td>';
        }
        if (getDay(day) % 7 === 6) {
            table += '</tr><tr>';
            arr = [];
        }
        day.setDate(day.getDate() + 1);
    }
    if (getDay(day) !== 0) {
        for (let i = getDay(day); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day - 1;
}

function headerRender() {
    let parSelect = document.querySelector("#select");
    document.querySelector(".year").innerHTML = yDays;
    let select = document.createElement("select");
    select.id = "monthSelect";
    parSelect.appendChild(select);
    for (let i = 0; i < monthNames.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = monthNames[i];
        if (i === mList) {
            option.selected = true;
            document.querySelector(".mh").innerText = monthNames[i];
        }
        select.appendChild(option);
    }
}
headerRender();

function addCalendarYearAndMonth() {
    let monthSelect = document.querySelector("#monthSelect");
    let next = document.querySelector("#next");
    let month = parseInt(monthSelect.value, 10);
    next.addEventListener("click", () => {
        yDays += 1
        createCalendar(root, yDays, month + 1);
        document.querySelector(".year").innerHTML = yDays;
    });

    let prev = document.querySelector("#prev");
    prev.addEventListener("click", () => {
        yDays -= 1;
        createCalendar(root, yDays, month + 1);
        document.querySelector(".year").innerHTML = yDays;
    });
    let today = document.querySelector("#today");
    today.addEventListener("click", () => {
        createCalendar(root, days.getFullYear(), days.getMonth() + 1);
        document.querySelector(".year").innerHTML = days.getFullYear();
        document.querySelector(".mh").innerText = monthNames[days.getMonth()];
        monthSelect.value = days.getMonth();
    });
    monthSelect.addEventListener("change", () => {
        let month = parseInt(monthSelect.value, 10);
        document.querySelector(".mh").innerText = monthNames[month]
        createCalendar(root, yDays, month + 1);
    });
}
addCalendarYearAndMonth();


function addZeroTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function watch() {
    createCalendar(root, yDays, mList + 1);
    let hours = addZeroTime(days.getHours());
    let minutes = addZeroTime(days.getMinutes());
    let seconds = addZeroTime(days.getSeconds());
    let time = hours + ":" + minutes + ":" + seconds;
    let clock = document.querySelector("#time");
    clock.innerHTML = time;

    setInterval(() => {
        let newDate = new Date();
        let hours = addZeroTime(newDate.getHours());
        let minutes = addZeroTime(newDate.getMinutes());
        let seconds = addZeroTime(newDate.getSeconds());
        let time = hours + ":" + minutes + ":" + seconds;
        let clock = document.querySelector("#time");
        clock.innerHTML = time;
    }, 1000);
}
watch();

let text = document.createElement("textarea");

function note(td) {
    td.classList.toggle("note");
    td.querySelector(".comment").focus();
}




