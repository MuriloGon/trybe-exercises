const { objs: { obj1, obj2, obj3 } } = require('./part1_ex5');

describe('EX05 - Test objects equality', () => {
  it('a - all objs are objects', () => {
    expect(typeof (obj1)).toEqual('object');
    expect(typeof (obj2)).toEqual('object');
    expect(typeof (obj3)).toEqual('object');
  });

  it('b - deep equality between objects', () => {
    expect(obj1).toEqual(obj2);
    expect(obj2).not.toEqual(obj3);
  });
});

