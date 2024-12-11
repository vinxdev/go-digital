//callbacks 
// A callback function can run after another function once its finished
function display(name,bal){
    console.log(`Hello ${name} your balance is ${bal}`);
}

function bank(user,deb,cre,display){
    let bala = cre-deb;
    display(user,bala)
}

bank("vineet",200,300,display)



function display(some){
    console.log(some);
}

function myFirst() {
    display("1");
}

function mySecond() {
    display("2");
}
  
myFirst();
mySecond();


//settimeout
setTimeout(() => {
    console.log("this will display after 3 sec");
}, 3000);

//a promise can be fulfilled, rejected or pending
const display1 = (some) =>{console.log(some)}

let pr = new Promise(function(resolve,reject){
    let i = 0;
    i == 0?resolve("ok👍"):reject("bad⚠️")
})

pr.then(display1).catch(display1)

