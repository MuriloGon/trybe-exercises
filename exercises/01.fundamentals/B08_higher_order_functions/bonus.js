const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// ex01
const dmgFuncs = {
  dragon: (obj) => Math.round(Math.random() * (obj['strength'] - 15) + 15),
}

const damageCausedByRaw = (battleObj, battleObjFunc) => {
  return (key) => battleObjFunc[key](battleObj[key]);
}
const damagaCausedBy = damageCausedByRaw(battleMembers, dmgFuncs);
console.log('damage dragon', damagaCausedBy('dragon'));

// ex02
dmgFuncs['warrior'] = (obj) => {
  return Math.round(
    Math.random() * (obj['weaponDmg'] * obj['strength'] - obj['strength']) + obj['strength']
  );
};
console.log('damage warrior', damagaCausedBy('warrior'));

// ex03
dmgFuncs['mage'] = (obj) => {
  if (obj['mana'] <= 15) {
    console.log('Não possui mana suficiente');
    return 0;
  } else {
    obj['mana'] -= 15;
    return Math.round(Math.random() * (obj['intelligence'] * 2) + obj['intelligence']);
  }
};
console.log('===============================================================')
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));
console.log('damage mage', battleMembers['mage'].mana, damagaCausedBy('mage'));