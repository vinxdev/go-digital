//chnages the text by id
document.getElementById("first").innerHTML="bye"
console.log("hello");

//finds the tag using tagname
const element = document.getElementsByTagName("p")
console.log(element);

//finding html elements by css selectors
const x = document.querySelector("m")

const y = document.querySelectorAll("h1.fir")
if (y.length > 0) {
    document.getElementById("first").innerText = "hellooo" + y[1].innerHTML;
} else {
    document.getElementById("first").innerText = "hellooo"; 
}

//html forms
function myFunction() {
    let x = document.getElementById("num").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      alert("Input not valid")
    } else {
      alert("Input OK")
    }
  }
  
//style
document.getElementById("first").style.color="red"
document.getElementById("first").style.fontStyle="italic"

//onmousehover and onmouseout
function mOver(obj) {
  obj.innerHTML = "hover here"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

//be used to write directly to the HTML output stream
// document.write(Date())

//event listner
document.getElementById("btn").addEventListener("click",data)

function data(){
  document.getElementById("txt").innerText=Date()
}



