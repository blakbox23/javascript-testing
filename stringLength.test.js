const { expect } = require('@jest/globals');
const { stringLength } = require('./main');

test('should output length of string', () => {
    const count = stringLength('one');
    expect(count).toBe(3);
});
