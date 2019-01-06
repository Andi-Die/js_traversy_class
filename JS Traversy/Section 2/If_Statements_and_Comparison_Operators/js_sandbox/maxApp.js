// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// equal to
// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // not equal to
// if(id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // equal to value and type
// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // not equal to value and type
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// Greater or less than
// if(id <= 200){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// If else
// const color = 'yellow';

// if(color === 'red'){
//     console.log('color is red')
// } else if(color === 'blue') {
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue')
// }

// Logical operators
const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <=19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
    console.log('CORRECT');
else  
    console.log('INCORRECT');