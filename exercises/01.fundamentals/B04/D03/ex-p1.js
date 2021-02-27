function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function fillWithChar(char, times) {
    let output = ``;
    for (let x = 1; x <= times; x++) output += `${char}`;
    return output;
}

// Item 01
console.log(`\n== Item01 ==`)
function square(n) {
    if (isInt != false) {
        let str = "";
        for (let x = 1; x <= n; x++) str += "*";
        for (let x = 1; x <= n; x++) console.log(str);
    } else { return null; };
}
square(5);

// Item 02
console.log(`\n== Item02 ==`)
function triangle(n) {
    if (isInt != false) {
        let str = "";
        for (let x = 1; x <= n; x++) {
            let chars = x;
            str = fillWithChar('*', chars)
            console.log(str)
        };
    } else { return null; };
}
triangle(5)


// Item 03
console.log(`\n== Item03 ==`)
function triangle2(n) {
    if (isInt != false) {
        let str = "";
        for (let x = 1; x <= n; x++) {
            let chars = x;
            let spaces = n - x;
            str = fillWithChar(' ', spaces) + fillWithChar('*', chars)
            console.log(str)
        };
    } else { return null; };
}
triangle2(5)

// Item 04
console.log(`\n== Item04 ==`)
function triangle3(n) {
    if (isInt != false) {
        let str = "";
        for (let x = 1; x <= n; x++) {
            let chars = x;
            let spaces = n - x;
            str = fillWithChar(' ', Math.round(spaces / 2)) + fillWithChar('*', chars)

            if (x % 2 == 1) console.log(str);
        };
    } else { return null; };
}
triangle3(5)