// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array (true or false)
val = Array.isArray(numbers);
// Get single value 
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);

// Mutating arrays
// Adding to the end
// numbers.push(250);
// // Adding to the front
// numbers.unshift(120);
// // Remove from the end
// numbers.pop();
// // Remove from the front
// numbers.shift();
// // Splice out values from anyplace in the array(where we want to start and where to end)
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sort
// val = fruit.sort();
// val = numbers.sort();

// use the "compare function"
// val = numbers.sort(function(x, y){
//     return x-y;
// });

// // reverse sort
// val = numbers.sort(function(x, y){
//     return y-x;
// });

// Find
function over50(num){
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);