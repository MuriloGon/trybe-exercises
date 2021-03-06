let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

// Item 01
console.log(`\n== Item01 ==`);
console.log('Welcome, ' + info.personagem);
console.log('Welcome, ' + info["personagem"]);

// Item 02
console.log(`\n== Item02 ==`);
console.log(Object.keys(info))
info.recorrente = 'Sim';
console.log(Object.keys(info))
console.log('recorrente:', info.recorrente)

// Item 03
console.log(`\n== Item03 ==`);
for (let datum in info) console.log(datum);

// Item 04
console.log(`\n== Item04 ==`);
for (let datum in info) console.log(info[datum]);

// Item 05
console.log(`\n== Item05 ==`);
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};
for (let x in info) console.log(info[x] + " e " + info2[x])