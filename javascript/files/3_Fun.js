//function
function func1(p1, p2) {
    add = p1+p2
    return add
  }

console.log(func1(9,2));


//The () operator invokes (calls) the function
function area(temp) {
    return 5 *(temp-32);
  }
  
let value = area(77);
console.log(value);

//self invoking functions
(function () {
  console.log("I will invoke myself!!");
})()

//returns the number of arguments received when the function was invoked
function myFunction(a, b) {
  return arguments.length;
}
console.log(myFunction(1, 2, 3, 4, 5)); //

//returns the function as a string
function str(a,b) {
  return a*b
}
console.log(str(9,3).toString());

//Arrow functions allows a short syntax for writing function expressions
const fuc = () =>{
  console.log("Hello, world!");
}
fuc()

//rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function sum(...args){
  let sum=0
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sum(2,4,2,13));

//The argument object contains an array of the arguments used when the function was called

const subAll = (...numbers) => numbers.reduce((result, num) => result - num);
x = subAll(1, 123, 500, 115, 44, 88);
console.log(x);

//this, call,apply, bind 
//The this keyword refers to the current object in a function
//The call() method calls a function with a given this value and arguments provided individually.
const name1 = {
  firstname:"vineet",
  lastname:"salian",
  detail: function(city,state){
    return this.firstname+" "+this.lastname+" from "+city+","+state
  }
}

const name2 = {
  firstname:"xo",
  lastname:"z",
  }

console.log(name1.detail.call(name2,"mumbai","maharashtra"));

//the apply() method calls a function with a given this value and an array of arguments.
console.log(name1.detail.apply(name2["mumbai","maharashtra"]));

//The bind() method creates a new function that has its this keyword set to the provided value,
let bin = name1.detail.bind(name2,"Mumbai","Maharashtra");
console.log(bin());


//in closures variables have access to their outer scope, even when the outer function has returned.
function outer(){
  let i = "hidden";
  function inner(){
    console.log(i);
  }
  return inner();
}

outer()

