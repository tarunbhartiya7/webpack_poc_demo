// const sum = require('./sum');

import css from './app.scss';
import sum from './sum';
import mul from './mul';

const total = sum(10, 5);

const multiplication = mul(4, 4);

console.log(`Total: ${total}`);
console.log(`Multiplication: ${multiplication}`);