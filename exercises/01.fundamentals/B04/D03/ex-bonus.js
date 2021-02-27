/* 
total-lines -> n%2==1;
n1 -> ---*---
n2 -> --------
n3 -> --*-*--
n4 -> --------
n5 -> -*---*-
n6 -> --------
n7 -> *******
*/

function rCh(char, repeat) {
    let output = ""
    for (let x = 0; x < repeat; x++) {
        output += `${char}`;
    }
    return output;
}

// Item 01
console.log(`\n== Item01 ==`)
function funnyTriangle(n, char = '*', space = ' ') {
    if (n % 2 == 1 && n > 0) {
        for (let x = 1; x <= n; x += 2) {
            if (x === 1) {
                console.log(rCh(space, (n - 1) / 2) + char + rCh(space, (n - 1) / 2));
                continue;
            }
            if (x == n) { console.log(rCh(char, n)); continue; };

            let betweenAsteriscs = x - 2;
            let startSpaces = (n - (betweenAsteriscs + 2)) / 2;
            console.log(`${rCh(space, startSpaces)}${char}${rCh(space, betweenAsteriscs)}${char}`)
        }
    } else {
        console.log("Enter with a positive odd number")
    }
}
funnyTriangle(9);


// Item 02
console.log(`\n== Item02 ==`)
function isPrime(n) {
    let primeNumbers = [];
    for (let x = 1; x <= n; x += 1) {
        if (n % x == 0) {
            primeNumbers.push(x);
            // console.log(primeNumbers)
        }
    }

    console.log({
        isPrime: (primeNumbers.length > 2) || primeNumbers.length == 1 ? false : true,
        divisibleNumbers: primeNumbers
    })
}
isPrime(37)



