function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Write your code here
/* Exercise 1*/
// item 01
function addDays(parentElement, array) {
    let daysLen = array.length;

    for (let i = 0; i < daysLen; i += 1) {
        let li = document.createElement('li');
        li.classList = 'day'
        li.innerText = `${array[i]}`
        parentElement.appendChild(li);
    }
}

const tenDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysList = document.getElementById('days');

addDays(daysList, tenDaysList);

// item 02
function addClassAtDays(array, className, selector) {
    let liItems = document.querySelectorAll(selector);

    for (let item of liItems) {
        let itemNum = parseInt(item.innerText);
        if (array.includes(itemNum)) item.className += ` ${className}`;
    }
}
const holidays = [24, 25, 31]
addClassAtDays(holidays, 'holiday', '#days > li');

// item 03
const fridays = [4, 11, 18, 25]
addClassAtDays(fridays, 'friday', '#days > li');