const { expect } = require('@jest/globals');
const { capitalize } = require('./main');

test('tests capitalize function', () => {
    const capitalized = capitalize('word');
    expect(capitalized).toBe('Word')
})