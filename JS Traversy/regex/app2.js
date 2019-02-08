let re;
// literal characters
re = /hello/; //case sensitive w/ no i
re = /hello/i; //case insensitive

// metacharacter symbols
re = /^h/i;     //must start with(^)
re = /d$/i;     //must end with($)
re = /world$/i;     //must end with($)
re = /^hello$/i;     //must start with(^) and end with($)
re = /h.llo/i;     //matches any ONE character(.)
re = /h*llo/i;     //matches any 0 or more times character(*)
re = /gre?a?y/i;   //optional character followed by (?)
re = /gre?a?y\?/i;   //escape character preceding character

// Brackets [] - character sets
re = /gr[ae]y/i;   // must be an a or e
re = /[GF]ray/i;   // must be an G or F
re = /[^GF]ray/i;   // Can be anything BUT G or F
re = /[A-Z]ray/;   // Can match any uppercase letter
re = /[a-z]ray/;   // Can match any uppercase letter
re = /[A-Za-z]ray/;   // Can match any letter of either case
re = /[0-9]ray/;   // match any digit
re = /[0-9][0-9]ray/;   // match any digit

// Braces {} - quanitifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur between {m} and {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// parenthases () - grouping
re = /^([0-9]x){3}$/

// shorthand character classes
re = /\w/; // word character - alphanumeric or ___
re = /\w+/; // + = one or more
re = /\W/ // Non-word character
re = /\d/; // Match any digit
re = /\d+/; // Match aany digit 0 or more times
re = /\D/; // match any Non-digit
re = /\s/; // match whitespace character(spaces or tabs)
re = /\S/; // match non-whitespace character(spaces or tabs)
re = /Hell\b/i; // word boundary

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y

// String to match
const str = 'Hello';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);