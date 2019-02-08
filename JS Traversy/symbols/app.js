// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('Sym2');

// No two symbols are the same, even w/ the same identifier

console.log(Symbol('123') === Symbol('123'));

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.KEY3 = 'Prop3';
myObj.KEY4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// symbols are not enumerable in for ... in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));