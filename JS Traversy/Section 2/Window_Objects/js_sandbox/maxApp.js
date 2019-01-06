// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
// window.alert('1234')

// PROMPT  
// const input = prompt();
// alert(input); 

// // CONFIRM
// if(confirm('Are you sure?')){
//     console.log('Yes');
// } else {
//     console.log('no');
// }

// PROPERTIES

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// HISTORY OBJECT
// val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);