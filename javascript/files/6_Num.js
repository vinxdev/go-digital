let x = 3213e4 //exponential large
let y = 123e-5; //small
console.log(x);
console.log(y);
let a = "hello"

res = x / "hi"
console.log(res); //nan  notanumber

let z = new Number(23) //number as a object

let xo = BigInt(9909908987999999) //bigint
console.log(xo);

let str = x.toString(); //number to string convert
console.log(str);
console.log(typeof(str));


let str1 = x.toExponential(); //string in exponent form
console.log(str1);
console.log(typeof(str1));

let str2 = x.toPrecision(4); //string at specified number length
console.log(str2);

let str3 = x.valueOf(); //returns number as  a number
console.log(str3);
console.log(typeof(str3));

let str4 = parseInt(x) // parses a string and returns a whole number
console.log(str4);
console.log(typeof(str4));

let str5 = parseFloat(x) // parses a string and returns a number
console.log(str5);
console.log(typeof(str5));

console.log(Number.isInteger(x)); //checks if its a num or not
console.log(1/0); //positive infinity
console.log(-1/0); //negative infinity
console.log(Number.MIN_VALUE);//lowest possible number
console.log(Number.MAX_VALUE);//largest possile number
console.log(Number.EPSILON);//diff in smallest floating number greater than and equal to 1





