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
  healthPoints: 500,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dmgFuncs = {
  // ex01
  dragon: (obj) => {
    const dmg = Math.round(Math.random() * (obj['strength'] - 15) + 15);
    obj['damage'] = dmg;
  },
  // ex02
  warrior: (obj) => {
    obj['damage'] = Math.round(
      Math.random() * (obj['weaponDmg'] * obj['strength'] - obj['strength']) + obj['strength']
    );
  },
  // ex03
  mage: (obj) => {
    if (obj['mana'] <= 15) {
      console.log('Não possui mana suficiente');
      obj['damage'] = 0;
    } else {
      obj['damage'] = Math.round(Math.random() * (obj['intelligence'] * 2) + obj['intelligence'])
      obj['mana'] -= 15;;
    }
  }
}

const damageCausedByRaw = (battleObj, battleObjFunc) => {
  return (key) => battleObjFunc[key](battleObj[key]);
}

exports.battleMembers = battleMembers;
exports.dmgFuncs = dmgFuncs;
exports.damageCausedByRaw = damageCausedByRaw;