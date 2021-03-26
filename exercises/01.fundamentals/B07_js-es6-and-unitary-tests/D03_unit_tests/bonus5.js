const assert = require('assert');
class PasswordVerifier {
  constructor(password) {
    this.password = password;
    this.checks = 0;
    this.isOk = false;
    this.conditions = {
      null: false,
      length: false,
      upper: false,
      lower: false,
      digit: false
    };
  }

  Verify = () => {
    this.verifyNotNull();
    this.verifyLength();
    this.verifyUpper();
    this.verifyLower();
    this.verifyDigit();

    if (this.checks >= 3) this.isOk = true;
    else this.isOk = false;

    return Object.values(this.conditions).reduce((a, b) => a && b);
  }

  verifyNotNull = () => {
    if (this.password === '') return false;
    // throw new Error('Cannot be null');
    this.changeState('null');
    return true;
  }

  verifyLength = () => {
    let { length } = this.password
    if (length < 8) return false;
    // throw new Error(`The password must have at least 8 chars but get ${length}`);
    this.changeState('length');
    return true;
  }

  verifyUpper = () => {
    const { length } = this.password;
    let upLetters = 0;
    for (let i = 0; i < length; i += 1) {
      const charcode = this.password[i].charCodeAt(0);
      if (charcode >= 65 && charcode <= 90) upLetters += 1;
    }
    if (upLetters < 1) return false;
    // throw new Error('Add at least one UPPERCASE letter');
    this.changeState('upper');
    return true;
  };

  verifyLower = () => {
    const { length } = this.password;
    let lowLetters = 0;
    for (let i = 0; i < length; i += 1) {
      const charcode = this.password[i].charCodeAt(0);
      if (charcode >= 97 && charcode <= 122) lowLetters += 1;
    }
    if (lowLetters < 1) return false;
    // throw new Error('Add at least one LOWERCASE letter');
    this.changeState('lower');
    return true;
  };

  verifyDigit = () => {
    const { length } = this.password;
    let digits = 0;

    for (let i = 0; i < length; i += 1) {
      const charcode = this.password[i].charCodeAt(0);
      if (charcode >= 48 && charcode <= 57) digits += 1;
    }
    if (digits < 1) return false;
    // throw new Error('Add at least one NUMBER');
    this.changeState('digit');
    return true;
  };

  changeState = (propertie) => {
    this.conditions[propertie] = !this.conditions[propertie];
    this.computeChecks();
  };

  computeChecks = () => {
    this.checks = Object.values(this.conditions).filter(x => x).length;
  };

}

//1
//a: password should be larger than 8 chars
assert.deepStrictEqual(new PasswordVerifier('12345678').verifyLength(), true)
assert.notDeepStrictEqual(new PasswordVerifier('1234567').verifyLength(), true)

//b: password should not be null
assert.deepStrictEqual(new PasswordVerifier('').verifyNotNull(), false)
assert.deepStrictEqual(new PasswordVerifier('a').verifyNotNull(), true)

//c: password should have one uppercase letter at least
assert.deepStrictEqual(new PasswordVerifier('aaa').verifyUpper(), false)
assert.deepStrictEqual(new PasswordVerifier('aAa').verifyUpper(), true)

//d: password should have one lowercase letter at least
assert.deepStrictEqual(new PasswordVerifier('111').verifyLower(), false)
assert.deepStrictEqual(new PasswordVerifier('1a1').verifyLower(), true)

//e: password should have one number at least
assert.deepStrictEqual(new PasswordVerifier('aaa').verifyDigit(), false)
assert.deepStrictEqual(new PasswordVerifier('a1a').verifyDigit(), true)


const tst1 = new PasswordVerifier('');
console.log('teste1')
console.table(Object.assign({}, tst1.conditions, { verify: tst1.Verify(), checks: tst1.checks }));
assert.deepStrictEqual(tst1.Verify(), false);

const tst2 = new PasswordVerifier('a');
console.log('teste2')
console.table(Object.assign({}, tst2.conditions, { verify: tst2.Verify(), checks: tst2.checks }));
assert.deepStrictEqual(tst2.Verify(), false);

const tst3 = new PasswordVerifier('--------');
console.log('teste3')
console.table(Object.assign({}, tst3.conditions, { verify: tst3.Verify(), checks: tst3.checks }));
assert.deepStrictEqual(tst3.Verify(), false);

const tst4 = new PasswordVerifier('U-------');
console.log('teste4')
console.table(Object.assign({}, tst4.conditions, { verify: tst4.Verify(), checks: tst4.checks }));
assert.deepStrictEqual(tst4.Verify(), false);

const tst5 = new PasswordVerifier('U------u');
console.log('teste4')
console.table(Object.assign({}, tst5.conditions, { verify: tst5.Verify(), checks: tst5.checks }));
assert.deepStrictEqual(tst5.Verify(), false);

const tst6 = new PasswordVerifier('U---0--u');
console.log('teste5')
console.table(Object.assign({}, tst6.conditions, { verify: tst6.Verify(), checks: tst6.checks }));
assert.deepStrictEqual(tst6.Verify(), false);
