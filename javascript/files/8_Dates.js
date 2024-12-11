//using data with new keywork
const date = new Date()
console.log(date);

//using date by specifing it 
const ndate = new Date("1 4 ,2024")
console.log(ndate);

//6 numbers specify year, month, day, hour, minute, second:
const d = new Date(2018, 15, 24, 10, 33, 30);
console.log(d);

//One and two digit years will be interpreted as 19xx:
const cen = new Date(91, 11, 24);
console.log(cen);

//convert to string
const str = new Date()
console.log(str.toString());

//Short dates are written with an "MM/DD/YYYY" syntax like this
const shd = new Date("03/25/2015");
console.log(shd);

//Long dates are most often written with a "MMM DD YYYY"
const ld = new Date("sep 02 2004")
console.log(ld);

//method to convert it to milliseconds
let msec = Date.parse("March 21, 2012");
console.log(msec);

//returns the year of a date as a four digit number
let year = new Date("2025-01-3")
console.log(year.getFullYear());

// returns time
let time = new Date("2025-01-3")
console.log(time.getTime());

//returns current date and time
console.log(Date.now());

//sets the year of a date object
const x = new Date();
x.setFullYear(2020);
console.log(x);

//sets the seconds of a date object
const sec = new Date();
sec.setSeconds(31);
console.log(sec);
