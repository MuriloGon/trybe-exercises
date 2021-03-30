const { battleMembers, dmgFuncs } = require('./bonus');


// 02 and 03
class GameActions {
  constructor(battlemembers, dmgfuncs) {
    this.battleMembers = battlemembers;
    this.dmgFuncs = dmgfuncs
    this.round = 0;
    this.status = {
      dragon: 'alive',
      warrior: 'alive',
      mage: 'alive'
    }
  }
  strikeDragon = (dmg) => {
    const hp = this.battleMembers['dragon'].healthPoints;
    if (hp <= 0) {
      console.log('Dragon killed')
    } else {
      this.battleMembers['dragon'].healthPoints -= dmg;
      console.log('hp', this.battleMembers['dragon'].healthPoints)
    }
  };
  checkHealth = () => {
    const wrr = this.battleMembers['warrior'];
    const mage = this.battleMembers['mage']
    const dragon = this.battleMembers['dragon']

    if (wrr.healthPoints < 0) {
      wrr.healthPoints = 0;
      this.status.warrior = 'dead';
    }
    if (mage.healthPoints < 0) {
      mage.healthPoints = 0;
      this.status.mage = 'dead';
    }

    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
      this.status.dragon = 'dead';
    }
  }

  warrior = () => {
    this.dmgFuncs['warrior'](this.battleMembers['warrior']);
    this.battleMembers['dragon'].healthPoints -= this.battleMembers['warrior'].damage;
  };
  mage = () => {
    this.dmgFuncs['mage'](this.battleMembers['mage']);
    this.battleMembers['dragon'].healthPoints -= this.battleMembers['mage'].damage;
  };
  dragon = () => {
    this.dmgFuncs['dragon'](this.battleMembers['dragon']);
    const dmg = this.battleMembers['dragon']['damage']
    this.battleMembers['warrior'].healthPoints -= dmg;
    this.battleMembers['mage'].healthPoints -= dmg;
  };
  randomActions = () => {
    const { warrior, mage, dragon } = this.status;
    this.checkHealth();
    if (warrior !== 'dead' || mage !== 'dead' && dragon === 'alive') {
      console.log('Turn: ' + this.round)
      console.log('-----------------')
      this.dragon();
      this.warrior();
      this.mage();

      console.log(this.battleMembers);
      console.log('-----resumo------')
      console.log(this.status)
      console.log('=================\n\n')
      this.round += 1;
    }
  }
}

const Game = new GameActions(battleMembers, dmgFuncs)

Game.randomActions();
Game.randomActions();
Game.randomActions();
Game.randomActions();
Game.randomActions();
Game.randomActions();
Game.randomActions();
