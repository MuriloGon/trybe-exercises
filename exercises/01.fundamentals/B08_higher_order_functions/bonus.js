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
