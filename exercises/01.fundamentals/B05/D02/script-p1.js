let body = document.querySelector('body');

//item 01
function addH1(parentElement, innerText) {
    let h1 = document.createElement('h1');
    h1.innerText = innerText;
    parentElement.append(h1);
    return h1;
}
let mainH1 = addH1(body, 'Exercise 5.2 - JavaScript DOM');

//item 02
function addDiv(parentElement, classList) {
    let div = document.createElement('div');
    div.classList.add(classList);
    parentElement.append(div);
    return div;
}
let divMainContent = addDiv(body, ['main-content']);

//item 03
let divChildMainContent = addDiv(divMainContent, ['center-content']);

//item 04
function addP(parentElement, text, classList = null) {
    let pEle = document.createElement('p');
    pEle.innerText = text;
    if (classList != null) pEle.className = classList;
    parentElement.appendChild(pEle);
    return pEle;
}
let pElement1 = addP(divMainContent, 'string teste do parágrafo');

//item 05 and Item 06
let divLeftContent = addDiv(divMainContent, 'left-content');
let divRightContent = addDiv(divMainContent, 'right-content');

//item 07
function addImg(parentTag, src, className) {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.className = className;
    parentTag.appendChild(imgElement);
    return imgElement;
}
let imgElement = addImg(divLeftContent, 'https://picsum.photos/200', 'small-image');

//item 08
function addOl(parentTag, list) {
    let ulElement = document.createElement('ul');

    for (let li of list) {
        let liElement = document.createElement('li');
        liElement.innerText = li.toString();
        ulElement.appendChild(liElement);
    }

    parentTag.appendChild(ulElement);
    return ulElement;
}
let olElement1 = addOl(
    divRightContent,
    ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
);

//item 09
function addH3ToChilds(parentElement) {
    let parentEl = parentElement;
    for (let i in parentEl.childNodes) {
        let child = parentElement.children[i]
        
        let h3 = document.createElement('h3');
        h3.innerHTML = `${i} - Elemento H3`;

        child.insertBefore(h3, child.children[0]);
    }
}
addH3ToChilds(divMainContent);