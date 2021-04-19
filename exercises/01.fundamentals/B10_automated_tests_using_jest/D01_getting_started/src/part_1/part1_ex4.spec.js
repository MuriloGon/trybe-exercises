const { myFizzBuzz } = require('./part1_ex4');

describe('EX04 - test function myFizzBuzz', () => {
  it('a. myRemoveWithoutCopy is a function', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('b. fizzbuzz case - (3 and 5)', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(30)).toEqual('fizzbuzz');
    expect(myFizzBuzz(45)).toEqual('fizzbuzz');
    expect(myFizzBuzz(60)).toEqual('fizzbuzz');
    expect(myFizzBuzz(61)).not.toEqual('fizzbuzz');
  });

  it('b. fizz case - (3)', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(12)).toEqual('fizz');
    expect(myFizzBuzz(7)).not.toEqual('fizz');
  });

  it('c. buzz case - (5)', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
    expect(myFizzBuzz(10)).toEqual('buzz');
    expect(myFizzBuzz(20)).toEqual('buzz');
    expect(myFizzBuzz(15)).not.toEqual('buzz');
  });

  it('d. buzz case - (everything else)', () => {
    expect(typeof myFizzBuzz(7)).toEqual('number');
    expect(myFizzBuzz(11)).not.toEqual('string');
    expect(myFizzBuzz(7)).toEqual(7);
    expect(myFizzBuzz(13)).toEqual(13);
    expect(myFizzBuzz(37)).toEqual(37);
    expect(myFizzBuzz(41)).toEqual(41);
  });
});