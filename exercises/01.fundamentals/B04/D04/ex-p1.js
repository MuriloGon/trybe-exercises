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
for(let datum in info) console.log(datum);
