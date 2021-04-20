const { uppercase } = require('./ex1');

test('ex1 - callback functions testing', (hasFinished) => {
  const callback1 = (str) => {
    try {
      expect(str).toBe('STRING1');
      hasFinished();
    } catch (error) {
      hasFinished(error);
    }
  }
  const callback2 = (str) => {
    try {
      expect(str).not.toBe('string1');
      hasFinished();
    } catch (error) {
      hasFinished(error);
    }
  }
  uppercase('string1', callback1);
  uppercase('string2', callback2);
});
