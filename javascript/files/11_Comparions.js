//Comparison operators can be used in conditional statements to compare values and take action depending on the result
let height = 180
if (height < 190) 
    console.log("You are not selected for army");
else
    console.log("selected");

// using logical operators
    if (height < 200 || height >= 180) 
        console.log("selected");
    else
        console.log("You are not selected for army");

// using ternery operators
let lap_price = 50000
lap_price>10000?console.log("you can"):console.log("you cant buy gaming lap");

//The ?? operator returns the first argument if it is not nullish
let age = null;
let text = "missing";
let result = age ?? text;
console.log(result);

//The ?. operator returns undefined if an object is undefined or null
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);
