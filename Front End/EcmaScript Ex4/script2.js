

function outerFunction()
{
    var counter = 0;

    function innerFunction()
    {
        counter++;
        return counter;
    }

    return innerFunction; 
}

let clousure = outerFunction();

console.log(clousure());      //1
console.log(clousure());      //2
console.log(clousure());      //3


/*
    1) outerFunction creates a variable "counter" and defines innerFunction
    2) outerFunction return innerFunction - but notice innerFunction still remembers counter
    3) Even though outFunction has finished running, the variable counter is preserved because of the closure.
    4) Each time you call closure() it increaments and remembers the update value

*/