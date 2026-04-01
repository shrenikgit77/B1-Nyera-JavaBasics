/* 
    filter function
    -----------------
    1) "filter()" is array function used to filter array collection based on condition
    2) "filter()" function has callback function and callback function has
        two arguments, first is "item" and second is "index"
            "item" represents each array value
            "index" is position of array value
    3) "filter()" function default return value is "empty/nothing"
    4) "filter()" function return type is []
    5) "filter()" function preserves original data ie. changes will be done as copy of array    
    6) "filter()" function never modify array value in any case and in any ways
*/

let numbers = [19, 53, 64, 90, 100];

//Q1. print even array values 

var answer = numbers.filter((item, index)=>{
    if(item%2==0)           //(19%2==0)  (53%2==0)  (64%2==0) ..  (100%2)
        return item;
});

console.log(answer);

//Q2. print odd numbers
var answer = numbers.filter((item, index)=> { 
    return item%2!=0; //zero means false and non-zero means "item"
})

console.log(answer);