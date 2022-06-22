import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './testPrac.js';

test('hello to be Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('aweSomE to be AweSomE', () => {
  expect(capitalize('aweSomE')).toBe('AweSomE');
});

test('cereal to be laerec', () => {
  expect(reverseString('cereal')).toBe('laerec');
});

test('racecar to be racecar', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('5 + 8 = 13', () => {
  expect(calculator.add(5, 8)).toBe(13);
});
test('5 - 2 = 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test('5 * 3 = 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});
test('15 / 5 = 3', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test('"attack at dawn" is encrypted to "fyyfhp fy ifbs"', () => {
  expect(caesarCipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('"wake up tomorrow at 9:00am sharp" is encrypted to "bfpj zu ytrtwwtb fy 9:00fr xmfwu"', () => {
  expect(caesarCipher('wake up tomorrow at 9:00am sharp')).toBe(
    'bfpj zu ytrtwwtb fy 9:00fr xmfwu'
  );
});

test('[1,8,3,4,2,6] to return avg: 4, min: 1, max: 8, length: 6 in an object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
