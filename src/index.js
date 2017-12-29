// const sum = require('./sum');
// import './image_viewer';
import css from './app.scss';
import sum from './sum';
import mul from './mul';

const total = sum(10, 5);

const multiplication = mul(4, 4);

console.log('From dev server');
console.log(`Total: ${total}`);
console.log(`Multiplication: ${multiplication}`);

//code splitting example - load the image_viewer file only after the button is clicked
import './codesplitting';
