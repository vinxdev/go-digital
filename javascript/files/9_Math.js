//returns pi value
console.log(Math.PI);

//returns the nearest integer
console.log(Math.round(3.6));

//returns the rounded up to its nearest integer
console.log(Math.ceil(3.6));

// rounded down to its nearest integer
console.log(Math.floor(3.6));

//the integer part of x
console.log(Math.trunc(3.6));

//the x is negative, null or positive
console.log(Math.sign(-4));

//the value of x to the power of y
console.log(Math.pow(2,10));

//returns the square root of x
console.log(Math.sqrt(64));

//returns the absolute (positive) value of x
console.log(Math.abs(-10.6));

//returns the sine (a value between -1 and 1) of the angle x (given in radians)
console.log(Math.sin(99));

// returns the cosine (a value between -1 and 1) of the angle x (given in radians).
console.log(Math.cos(30));

//math.min to find the minimum
console.log(Math.min(20,9,3));

//math.max to find the maximum
console.log(Math.max(30,1,432));

//genertors a random number
console.log(Math.random());

//the natural logarithm of x.
console.log(Math.log(3));

// the base 2 logarithm of x
console.log(Math.log2(3));

// Returns a random integer from 0 to 30:
console.log(Math.floor(Math.random() * 31));

//returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) )+min;
  }
console.log(getRndInteger(5,10));

//