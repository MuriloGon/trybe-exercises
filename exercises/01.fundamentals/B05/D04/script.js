console.log(localStorage)

//Main Interface Tags
const mainContainer = document.createElement('main-container');
document.body.insertAdjacentElement('afterbegin', mainContainer);

const leftContainer = document.createElement('left-container');
const rightContainer = document.createElement('right-container');

mainContainer.appendChild(leftContainer);
mainContainer.appendChild(rightContainer);

//WebSession
function localData(key, defaultValue) {
    let valueGet = localStorage.getItem(key);
    if (valueGet === null) {
        localStorage.setItem(key, defaultValue);
        return defaultValue;
    } else {
        return valueGet;
    }

}

//text area
function addTextArea(parentElement) {
    let inputTextBox = document.createElement('textarea')
    inputTextBox.type = 'text';
    inputTextBox.style['resize'] = 'none';
    inputTextBox.value = localData('text', '');
    parentElement.appendChild(inputTextBox);
    return inputTextBox;
}
function addPaperArea(parentElement) {
    let paperEle = document.createElement('paper');
    paperEle.innerText = localData('text', '');
    parentElement.appendChild(paperEle);
    return paperEle;
}
let textElement = addTextArea(rightContainer);
let paperElement = addPaperArea(rightContainer);

textElement.addEventListener('input', (e) => {
    paperElement.innerText = e.target.value;
    localStorage.setItem('text', e.target.value);
})


/* Interaction Area */
// Generic Div
function addGenericDiv(className) {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add(className);
    return containerDiv;
}

//Font Element
function addFontFamilyElement(parentElement) {
    let containerDiv = addGenericDiv('tool-bar-item');

    let labelElement = document.createElement('label');
    labelElement.for = 'Fonts';
    labelElement.innerText = 'Fonts';

    const safeFonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia',
        'Garamond', 'Courier New', 'Brush Script MT']


    let selectElement = document.createElement('select');


    let defaulSelectedFont = localData('fontFamily', safeFonts[0])
    safeFonts.forEach(x => {
        let optionElement = document.createElement('option');
        optionElement.selected = (defaulSelectedFont === x ? defaulSelectedFont : '')
        optionElement.value = x;
        optionElement.innerText = x;
        selectElement.append(optionElement);
    })
    containerDiv.appendChild(labelElement);
    containerDiv.appendChild(selectElement);
    parentElement.appendChild(containerDiv);

    paperElement.style['fontFamily'] = defaulSelectedFont;

    selectElement.addEventListener('input', e => {
        // console.log(e.target);

        paperElement.style['fontFamily'] = `${e.target.value}`;
        localStorage.setItem('fontFamily', `${e.target.value}`)
    });

    return containerDiv;
}
let fontFamilyElement = addFontFamilyElement(leftContainer);


//fontsize
function addFontSizeElement(parentElement) {
    let containerDiv = addGenericDiv('tool-bar-item');

    let inicialValue = localData('fontSize', '1px').match(/\d+/)[0];

    let labelElement = document.createElement('label');
    labelElement.for = 'FontSize';
    labelElement.innerText = 'FontSize: ' + inicialValue + 'px';

    let rangeElement = document.createElement('input');
    rangeElement.type = 'range';
    rangeElement.value = localData('fontSize', '1px').match(/\d+/)[0];
    rangeElement.min = '1';
    rangeElement.max = '50';

    paperElement.style['fontSize'] = localData('fontSize', '1px');

    rangeElement.addEventListener('input', e => {
        // console.log(paperElement);

        paperElement.style['fontSize'] = localData('fontSize', `${e.target.value}px`);
        localStorage.setItem('fontSize', `${e.target.value}px`)

        labelElement.innerText = 'Font Size: ' + e.target.value + ' px';
    });

    containerDiv.appendChild(labelElement);
    containerDiv.appendChild(rangeElement);

    parentElement.appendChild(containerDiv);
    return containerDiv;
}
let fontSizeElement = addFontSizeElement(leftContainer);

// colorElements