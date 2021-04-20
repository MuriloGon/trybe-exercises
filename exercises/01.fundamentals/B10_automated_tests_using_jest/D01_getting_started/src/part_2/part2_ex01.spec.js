const { encode, decode } = require('./part2_ex01');

describe('EX01 - test encode and decode functions', () => {
  it('1. encode and decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('2. encode must follow (a->1, e->2, i->3, o->4, u->5)', () => {
    const vowelsMap = {
      a: '1', e: '2', i: '3', o: '4', u: '5',
    };

    Object.entries(vowelsMap)
      .forEach(([vowel, num]) => expect(encode(vowel)).toBe(num));

    expect(encode('murilo-goncalves')).toBe('m5r3l4-g4nc1lv2s');
  });

  it('3. decode must follow (1->a, 2->e, 3->i, 4->o, 5->u)', () => {
    const vowelsMap = {
      '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u',
    };

    Object.entries(vowelsMap)
      .forEach(([num, vowel]) => expect(decode(num)).toBe(vowel));

    expect(decode('n3c2')).toBe('nice');
    expect(decode('w2ll pl1y2d')).toBe('well played');
  });

  it('4. the digits and letters not mapped must be unchanged', () => {
    expect(decode('fAvOrItE-cOlOrs')).toBe('fAvOrItE-cOlOrs');
  });

  it('5. the digits and letters not mapped must be unchanged', () => {
    const str = 'teste';
    const actual = decode(str)
    const expected = str.length
    expect(actual.length).toBe(expected);
  });
});