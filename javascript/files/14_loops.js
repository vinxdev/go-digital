//for loops
//to run the same code over and over again, each time with a different value
arr=[1,2,3,4,23,43,12]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);   
}

//for in loop
//loops through the properties of an Object
const details = {name:"vineet",age:22,edu:"grad"}
let text = ""

for (const i in details) {
    text +=details[i]
    console.log(text);
}

//for each loop
//function (a callback function) once for each array element
txt=""
arr.forEach(e => {
    txt+=e**2
});
console.log(txt);

//for of loop
//loops through the values of an iterable object
//looping over an array
let arr1 = [12,3,23,24,3,4,3,2]
let narr1 = ''
for (const x of arr1) {
    narr1 += x
}
console.log(narr1);

//looping over a string
let str1 = "hello"
let nstr1 = ''
for (const x of str1) {
    nstr1 += x
}
console.log(nstr1);

//loop while
//loops through a block of code as long as a specified condition is true.
let i = 1
while (i<10) {
    console.log(i);
    i++
}

//do while loop  
//loop is a variant of the while loop
do{
    console.log(i,"new");
    i++
}while(i<20)

//break statement can also be used to jump out of a loop
for (let i = 0; i < 5; i++) {
    if (i === 3)  break 
    text += "The number is " + i ;
  }
console.log(text);

//continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop
for (let i = 0; i < 5; i++) {
    if (i === 3) continue
    text += "The number is " + i ;
  }
console.log(text);


