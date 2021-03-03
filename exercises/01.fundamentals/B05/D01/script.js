//item01
function mySelfPTags(text) {
    let pTags = document.getElementsByTagName('p');
    for (let elP of pTags) {
        elP.innerText = text;
    }
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
        h1.innerHTML =
            h1.innerHTML.replace('JavaEscripito', 'Javascript');
    }
}
setTimeout(() => {
    fixH1();
}, 2000);
