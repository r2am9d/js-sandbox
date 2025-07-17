// Function hoisting
// declaration();
// expression();
// arrow();

// Function declaration
function declaration(enabled = true) {
    if (enabled) {
        console.log('Function declaration');
    }
}

// Function expression
const expression = function() {
    console.log('Function expression');
}

// Arrow function
const arrow = () => {
    console.log('Arrow function');
};

// Function() constructor
const constructor = new Function("console.log('Constructor function');");

// Self-invoking function
(function() {
    console.log('Self-invoking function');
})();

declaration();
expression();
arrow();
constructor();

// Function as values
let result1 = declaration(false);
console.log(result1); // undefined

// Function used in expressions
let result2 = `${declaration(false)} is called`;
console.log(result2); // 'undefined is called'