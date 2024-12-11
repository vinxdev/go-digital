// function to find out if an expression (or a variable) is true or false
console.log(Boolean(90<10));

// Boolean value of 0 is false, 1 is true,-0 is false, "" empty is false, undefiend is false
let x = 1;
console.log(Boolean(x));

//booleans can also be defined as objects with the keyword new
let y = new Boolean(false);
console.log(y);

//using equal operator
let first = false;
let second = new Boolean(false);
console.log(first == second);

//using tripple equal operator
let first1 = false;
let second2 = new Boolean(false);
console.log(first === second);

//
