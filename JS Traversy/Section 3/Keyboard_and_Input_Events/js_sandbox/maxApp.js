const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent);

// blur
// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);

// change
select.addEventListener('change', runEvent);

function runEvent(e){
    // e.preventDefault();

    // get input value
    // console.log(taskInput.value);

    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value;
}