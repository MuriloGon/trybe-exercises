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
