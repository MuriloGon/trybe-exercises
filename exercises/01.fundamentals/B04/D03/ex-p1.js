function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
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