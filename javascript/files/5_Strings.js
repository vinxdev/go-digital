let myname = "vineet"

//strings can be written inside "", '', ``
let str1 = ' sample text '
let str2 = " sample text 2 "
let str3 = ` sample text 3 ${myname}` //template strings


//string functions

console.log(str1.length); //checks the lengths of string
console.log("this is \"sample text\" ") //using escape characters
console.log(str2.charAt(1)); //using charat to give value at that index
console.log(str2[9]); //accessing values using specified index
console.log(str2.slice(3,15)); //using slicing
console.log(str2.substring(0,15));  //start and end values less than 0 are treated as 0
console.log(str2.toLowerCase()); // string is converted to lower case 
console.log(str1.toUpperCase()); // string is converted to upper case
console.log(str1.concat(str2)); // combines both string
console.log(str2.trim()); //removes whitespace
console.log(str2.split(","));// spilts the string
console.log(str2.repeat(2)); // repeates the string
console.log(str3.replace( 3,11)); //replace text
console.log(str2.indexOf(2)); // return value at that index
console.log(str2.search("sample")); // returns index
console.log(str3.match("sam")); // return match
console.log(str2.includes(3)); //checks if it is incuded or not
console.log(str3);
















 

