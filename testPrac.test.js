import { capitalize, reverseString } from './testPrac.js';

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
