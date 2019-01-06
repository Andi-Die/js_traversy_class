// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x;
};

// console.log(square());

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs(a function you declare and run at the same time)

// (function(){ 
//     console.log('IIFE ran...')
// })();

// (function(name){ 
//     console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();