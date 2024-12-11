//createing object
let details={"name":"vineet","age":22}
details.fullname = "vineet salian"

//creating obj using new keyword
let city = new Object()
city.name = "mumbai"
city.pincode = 3213123


console.log(details.name);
console.log(city.pincode);

console.log(`city is ${city.name} and pincode is ${city.pincode}`);

//accessing objects via for loop
const person = {
    name: "vineet",
    age: 22,
    city: "mumbai"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };

  console.log(text);
  
  //converts json to string
let objtotext = JSON.stringify(person)
console.log(objtotext);

  //object constructors

function Mobile(name,storage,battery,camera) {
    this.name = name
    this.storage = storage
    this.battery = battery
    this.camera = camera
  }

const myphone = new Mobile("redmi","512","5000",64)
console.log(myphone.battery);
 
//nested objects
const myobj = {
    name : "vineet",
    age : 22,
    address : {"city":"mumbai","pincode":5644345}
}

//using prototype to add new property in a function
function Person(age,gender){
  this.age= age,
  this.gender=gender
}
Person.prototype.name = "vineet"
const per = new Person(12,"men")
console.log(per.name);

//Object.assign() method copies properties from one or more source objects to a target object.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {
  firstName: "vineet",
  lastName: "Salian",

};
Object.assign(person1, person2);
console.log(person1);
console.log(person2);

//Object.entries() returns an array of the key/value pairs in an object
console.log(Object.entries(person1));

//creates an object from a list of key/value pairs
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

console.log(Object.fromEntries(fruits));

//returns a single dimension array of the object
let tex = Object.values(fruits)
console.log(tex);

//set sets the value of a property with a given name to a given value
const person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
  get lang() {
    return this.language
    }
};

// Set an object property using a setter:
person3.lang = "en";
console.log(person3.lang);

//prevents adding or removing properties to an object
Object.seal(person)

//checkd if an object is sealed or not
console.log(Object.isSealed(person));

//freeze method prevents any changes to an object.
Object.freeze(person)

