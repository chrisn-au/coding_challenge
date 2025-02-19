const reverse = require('./reverse');

test('do nothing does nothing', () => {
  expect(reverse.reverseSentence('this is a sentence', false, false))
    .toBe('this is a sentence');
});

test('reverse single letter is just the letter', () => {
  expect(reverse.reverseSentence('a', true, true))
    .toBe('a');
});

test('reverse sentence should reverse it', () => {
  expect(reverse.reverseSentence('this is a sentence'), true, false)
    .toBe('sentence a is this')
});

test('reverse the letters should reverse their letters', () => {
  expect(reverse.reverseSentence('the letters', false, true))
    .toBe('eht srettel');
});

test('reverse both should do everything', () => {
  expect(reverse.reverseSentence('this is a sentence'), true, true)
    .toBe('ecnetnes a si siht')
});