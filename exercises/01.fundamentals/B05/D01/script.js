//item01
function mySelfPTags(text) {
    let pTag = document.getElementsByTagName('p')[1];
    pTag.innerText = text;
}
setTimeout(() => {
    mySelfPTags("Trabalhando, ganhando bem e viajando pelo mundo");
}, 500);


//item02
function changeSquareBgColor(className, color) {
    let squares = document.getElementsByClassName(className);;
    for (let square of squares) {
        square.style.backgroundColor = color;
    }
}
setTimeout(() => {
    changeSquareBgColor('main-content', 'rgb(76,164,109)');
}, 1000);

//item03
setTimeout(() => {
    changeSquareBgColor('center-content', 'white');
}, 1500);

//item04
function fixH1() {
    let h1Tags = document.getElementsByClassName('title');
    for (let h1 of h1Tags) {
        h1.innerText =
            h1.innerText.replace('JavaEscripito', 'Javascript');
    }
}
setTimeout(() => {
    fixH1();
}, 2000);

//item04
function pTagsToUppercase() {
    let pTags = document.getElementsByTagName('p');
    for (let p of pTags) {
        p.innerText = p.innerText.toUpperCase()
    }
}
setTimeout(() => {
    pTagsToUppercase();
}, 2500);

//item05
function logAllPTagsText() {
    let pTags = document.getElementsByTagName('p');
    for (let p of pTags) {
        console.log(p.innerText);
    }
}
setTimeout(() => {
    logAllPTagsText();
}, 3000);

