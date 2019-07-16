const {add, subtract, multiply, divide} = require('./app.calc.js');

test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts one number from the other', () => {
  expect(subtract(8, 4)).toBe(4);
});

test('muliplies two numbers', () => {
  expect(multiply(5, 4)).toBe(20);
});

test('divides a number', () => {
  expect(divide(100, 20)).toBe(5);
});
