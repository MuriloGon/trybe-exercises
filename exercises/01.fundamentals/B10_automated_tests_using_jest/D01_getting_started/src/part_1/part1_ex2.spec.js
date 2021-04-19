const { myRemove } = require('./part1_ex2');

describe('EX02 - myRemove function', () => {
  it('a. myRemove is a function', () => {
    expect(typeof myRemove).toEqual('function');
  });

  it('b. the item is removed correctly', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('c. the array is changed when the function is applied', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('d. the array is changed when the function is applied', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  
  it('e. the operation computed by the function is immutable', () => {
    const a = [1, 2, 3, 4];
    const b = [...a];
    myRemove(a, 3);
    expect(a).toEqual(b);
  });

    
  it('f. if the item removed not match, do not modify the input array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
