//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

try {
    let res = 1/0
    console.log(res);
    if (!isFinite(res)) {
        throw new Error("division By zero")
    }
    console.log(res);
} catch (error) {
    console.log(error);
}

//finally statement lets you execute code, after try and catch, regardless of the result
try {
    let res = 1/0
    console.log(res);
    if (!isFinite(res)) {
        throw new Error("division By zero")
    }
    console.log(res);
} catch (error) {
    console.log(error);
} finally{
    console.log("done compiling");
}

