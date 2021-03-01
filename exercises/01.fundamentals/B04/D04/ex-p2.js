// Item 01
console.log(`\n== Item01 ==`);

function checkPalindrome(str) {
    if (typeof (str) != "string") return null;

    let len = str.length;
    let isPalidrome = true;

    for (let letter = 0; letter < len; letter += 1) {
        isPalidrome = isPalidrome && (str[letter] === str[len - 1 - letter]);
    }
    return isPalidrome;
}
console.log('arara -> ', checkPalindrome('arara'))
console.log('desenvolvimento -> ', checkPalindrome('desenvolvimento'))
