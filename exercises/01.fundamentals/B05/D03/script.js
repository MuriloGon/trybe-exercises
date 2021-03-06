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
        li.classList.add('day');
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
const holidays = [24, 25, 31];
addClassAtDays(holidays, 'holiday', '#days > li');

// item 03
const fridays = [4, 11, 18, 25];
addClassAtDays(fridays, 'friday', '#days > li');


/* Exercise 2*/
// item 01 and 1tem 02
function addButton(parentElement, string) {
    let btn = document.createElement('button');
    btn.textContent = string;
    parentElement.appendChild(btn);
    return btn;
}
let containerButtons = document.querySelector('div.buttons-container');
let btnHoliday = addButton(containerButtons, 'Holidays');


/* Exercise 3*/
function changeColorDayOnClick(element, selector, defaultColor, HighlightColor) {
    let holidays = document.querySelectorAll(selector);

    element.addEventListener('click', () => {
        for (let holiday of holidays) {
            let currentBgColor = holiday.style['backgroundColor'];

            if (currentBgColor === defaultColor || currentBgColor === '') {
                holiday.style['backgroundColor'] = HighlightColor;
            }
            else {
                holiday.style['backgroundColor'] = defaultColor;
            }
        }
    })
}
let defaultColor = 'rgb(238, 238, 238)';
let highlightColor = 'rgb(150, 238, 150)';
changeColorDayOnClick(btnHoliday, '.holiday', defaultColor, highlightColor);

/* Exercice 04 */
function addButton(parentElement, string) {
    let btn = document.createElement('button');
    btn.textContent = string;
    parentElement.appendChild(btn);
    return btn;
}
let btnFriday = addButton(containerButtons, 'Friday');
btnFriday.id = 'btn-friday';

/* Exercise 05 */
function changeTextOnClick(element, selector, fridaysOriginalElements, customText) {
    let fridays = document.querySelectorAll(selector);
    let textLen = fridays.length;

    element.addEventListener('click', () => {
        for (let i = 0; i < textLen; i += 1) {
            let currentText = fridays[i].innerText;

            if (currentText !== customText) fridays[i].innerText = customText;
            else fridays[i].innerText = fridaysOriginalElements[i];
        }
    })
}
const fridayElements = [...document.getElementsByClassName('friday')].map(v => parseInt(v.innerText));
changeTextOnClick(btnFriday, '.friday', fridayElements, 'FRIDAY');

/* Exercise 06 */
function zoomOut(evt, styles) {
    if (evt.target.localName == 'li')
        for (let prop in styles) evt.target.style[prop] = '';
}
function zoomIn(evt, styles) {
    if (evt.target.localName == 'li')
        for (let prop in styles) evt.target.style[prop] = styles[prop];
}

let zoomInStyles = {
    'fontSize': '35px',
    'color': 'red',
    'cursor': 'pointer'
}
daysList.addEventListener('mouseover', (e) => { zoomIn(e, zoomInStyles) }, false)
daysList.addEventListener('mouseout', (e) => { zoomOut(e, zoomInStyles) }, false)

/* Excercise 07 */
function addCustomSpanTask(parentElement, string) {
    let span = document.createElement('span');
    span.innerText = string;
    parentElement.appendChild(span);
}
let tasksElement = document.querySelector('.my-tasks');
addCustomSpanTask(tasksElement, "Nova Tarefa");

/* Exercise 08 */
function addCustomTask(parentElement) {
    let div = document.createElement('div');
    div.classList.add('task');
    parentElement.appendChild(div);
}
addCustomTask(tasksElement)

/* Exercise 09 */
function setStyles(element, styleObj) {
    for (let style in styleObj) element.style[style] = styleObj[style];
}

function removeStyles(element, styleObj) {
    for (let style in styleObj) element.style[style] = '';
}

function select(evt, style) {
    let classList = evt.target.classList;
    let stringClass = 'selected';
    let isSelected = classList.value.includes(stringClass);

    if (isSelected) {
        evt.target.classList.remove(stringClass);
        removeStyles(evt.target, style);
    }
    else {
        evt.target.classList.add(stringClass);
        setStyles(evt.target, style);
    }
}

let styleTask = {
    'backgroundColor': highlightColor,
    'border': '5px dashed red',
    'box-sizing': 'border-box'
}

document.querySelector('.task').addEventListener('click', (e) => {
    select(e, styleTask);
}, false);

/* Exercise 10 */
document.getElementById('days').addEventListener('click', (e) => {
    let color1 = `rgb(${Math.floor(Math.random() * 86 + 145)} ,${Math.floor(Math.random() * 86 + 145)} ,${Math.floor(Math.random() * 86 + 145)} )`
    let color2 = `rgb(${Math.floor(Math.random() * 86 + 145)} ,${Math.floor(Math.random() * 86 + 145)} ,${Math.floor(Math.random() * 86 + 145)} )`
    let styleDaySelected = {
        'backgroundColor': color1,
        'border': `2px dotted ${color2}`,
        'box-sizing': 'border-box',
        'color': 'white'
    }
    if (e.target.localName == 'li') select(e, styleDaySelected);
}, false);

/* Bonus */
let txtElement = document.getElementById('task-input');
let btnElement = document.getElementById('btn-add');

function addSubmitButtonEvents(textElement, buttonElement) {
    var txt = ''

    textElement.addEventListener('keyup', (e) => {
        txt = e.target.value;
        if (e.key === 'Enter') {
            addListItem(txt, textElement);
        }
    })

    buttonElement.addEventListener('click', () => {
        addListItem(txt, textElement);
    })
}

function addListItem(string, textElement) {
    if (string === '') {
        alert('Type something before submit the task!!')
    } else {
        let txtTask = textElement.value;
        let liItem = document.createElement('li');
        liItem.innerText = txtTask;

        document.querySelector('.task-list').appendChild(liItem);

        textElement.value = '';

        window.scrollTo(0, document.body.scrollHeight);
    }
}
addSubmitButtonEvents(txtElement, btnElement);
