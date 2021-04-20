const { searchEmployee } = require('./bonus')

describe('1 - Bonus', () => {
  it('1 - the function is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('2 - it is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('3 - must throw /ID não identificada/ when there\'s no Id', () => {
    const actual = () => searchEmployee('unknownId', 'lastname');
    const expected = /ID não identificada/i;
    expect(actual).toThrow(expected);
  });

  it('4 - must throw /Informação indisponível/ when there\'s no Id', () => {
    const actual = () => searchEmployee('4678-2', 'unknownProperty');
    const expected = /Informação indisponível/i;
    expect(actual).toThrow(expected);
  });

  it('5 - the function returns the right query', () => {
    const input1 = ['9852-2-2', 'firstName']
    const out1 = 'Jeff';

    const input2 = ['4678-2', 'specialities'];
    const out2 = ['Backend'];

    const input3 = ['1256-4', 'lastName']
    const out3 = 'Bezos';

    expect(searchEmployee(...input1)).toEqual(out1);
    expect(searchEmployee(...input2)).toEqual(out2);
    expect(searchEmployee(...input3)).toEqual(out3);
  });
});
