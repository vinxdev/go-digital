const countries = ["india","japan","UAE","europe","spain"]
console.log( countries[1]); //accessing via index

const bikes = new Array("honda","tvs","hero","bajaj") //using new keywork for array declaration
console.log(bikes[2]);

bikes[1]="ola" //changing value
console.log(bikes);

console.log(bikes.toString()); //converting to string

console.log(bikes.length); //length of an array

//accessing array elements using loops
for (let i = 0; i < bikes.length; i++) { 
    let element = bikes[i];
    console.log(element);
}

console.log(Array.isArray(bikes)); //check if its array or not

//nested objects and arrays
const myobj = {
    name : "vineet",
    age : 22,
    address : [
        {office:"bandra",pincode:5644345},
        {home:"boisar",pincode:5644589}
    ]
}

console.log(myobj.address[0].office);

console.log(bikes.at(2)); //access elements
console.log(bikes.join(countries)); //joinig 2 arrays
console.log(bikes.pop()); //removes last element
console.log(bikes.push("ktm")); //adds in the last element
console.log(bikes.shift()); // removes from the first element
console.log(bikes.unshift("honda")); // adds at the begining
console.log(bikes.concat(countries)); //merging arrays
console.log(bikes.copyWithin(2,0)); //copies array elements to another position in an array

//creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// first maps all elements of an array and then creates a new array by flattening the array
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr1.flatMap(x => [x, x * 10]);
console.log(newArr1);

// add new items to an array
const animals = ["lion","tiger","leopard","cheeta","lion"];
animals.splice(2, 0,'deer');
console.log(animals);
 
// slices out a piece of an array into a new array
const sl = animals.slice(2,6)
console.log(sl);

// converts an array to a comma separated string
const tostr = animals.toString()
console.log(tostr);


// array find 

// searches an array for an element value and returns its position
const find = animals.indexOf("lion")
console.log(find);

// lastindexof returns the position of the last occurrence
const lindex = animals.lastIndexOf("lion")
console.log(lindex);

//check if an element is present in an array
const inc = animals.includes("tiger")
console.log(inc);

//value of the first array element
const whole = [1,41,4,9,0,5,1,8,1]
const fin = whole.find((num)=>num%2==0)
console.log(fin);   

// index of the first array element
const ind = whole.findIndex((num)=>num%2==0)
console.log(ind);

// return the value of the first element that satisfies a condition
const lind = whole.findLast((num)=>num%2==0)
console.log(lind);

// finds the index of the last element that satisfies a condition.
const flind = whole.findLastIndex((num)=>num%2==0)
console.log(flind);


//array sort

//  sorts an array alphabetically
const sor = animals.sort()
console.log(sor);

// reverses the elements in an array
const rev = animals.reverse()
console.log(rev);

//sort an array without altering the original array
const sora = animals.toSorted()
console.log(sora);

//reverse an array without altering the original array
const reva = animals.toReversed()
console.log(reva);

//sorted from highest to lowest
const min = whole.sort(function(a,b){return a-b})
console.log(min);

//sorted from lowest to highest
const max = whole.sort(function(a,b){return b-a})
console.log(max);

//find the lowest number in an array
const low = Math.min(3,2,1,8)
console.log(low);

//find the highest number in an array
const high = Math.max(3,2,4,1,9)
console.log(high);

// array itteration
let newnum = " ";
whole.forEach(myFunction)
function myFunction(value) {
    newnum += value ;
}
console.log(newnum);    

//new array by performing a function on each array element
const numbers2 = whole.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);

// first maps all elements of an array and then creates a new array by flattening the array
const flatarr = whole.flatMap((x)=>x*2)
console.log(flatarr);

// creates a new array with array elements that pass a test
const fil = whole.filter((e)=>e%2==0)
console.log(fil);

// runs a function on each array element to produce or reduce it to a single value.
const red = whole.reduce((a,b)=>a+b)    
console.log(red);

//works from right-to-left in t(he array
const rred = whole.reduceRight((a,b)=>a+b)
console.log(rred);

//every array values are lesser than 42
const num = whole.every((e)=>e<42)
console.log(num);

//if some array values pass a test
const som = whole.some((e)=>e<20)
console.log(som);

//Array object from any object with a length property or any iterable object
const from1 = Array.from("animals")
console.log(from1);

// returns an Array Iterator object with the keys of an array.
const keys = animals.keys()
let text
for (let i of keys) {
    console.log(i);
}

//returns an Array Iterator object with key/value pairs
const entries = animals.entries()
let newe
for (let i of entries){
    newe = i
    console.log(newe);
}

// safe way to update elements in an array without altering the original array.
const ani = animals.with(2,"rabbit");
console.log(ani);

// The ... operator expands an iterable (like an array) into more elements
const birds = ["peigon","crow","peacock"]
console.log(...bikes,...birds,...animals);

