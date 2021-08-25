const { reverseString } = require('./main');


describe('reverse string', () => {
  
test('should reverse the string', () => {
    const reverse = reverseString('one');
    expect(reverse).toBe('eno');
});

test('should reverse the string', () => {
    const reverse = reverseString('1234');
    expect(reverse).toBe('4321');
});

});

