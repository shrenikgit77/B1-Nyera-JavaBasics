/* find() function vs some() function 
   -----------------------------------

    1) "find()" is array function used to search item/value in array collection
    2) "find()" function has callback function and callback function has
        two arguments, first is "item" and second is "index"
            "item" represents each array value
            "index" is position of array value
    3) "find()" function checks logical/relational condition. if value exist then 
        returns matching array-item otherwise returns undefined 
    4) "find()" function return type is undefined
    5) "find()" function never modifys array collection

    vs 

    1) some() function return type is boolean. some() function returns either true or false

*/

let numbers = [19,500,528,41,53,662];

var answer = numbers.find(item=>item==500);
console.log(answer); //output = 500

var answer = numbers.find(item=>item==1000);
console.log(answer); //output = undefined



var answer = numbers.some(item=>item==500);
console.log(answer);  //output = true

var answer = numbers.some(item=>item==1000);
console.log(answer); //output = false



let products = [
    {code:8934, title:"mouse", cost:800},
    {code:8924, title:"keyboard", cost:1600},
    {code:7842, title:"speaker", cost:1800},
    {code:8911, title:"RAM", cost:500},
    {code:7843, title:"processor", cost:6000},
];



console.log(products.find(item=>item.title=="RAM"));
console.log(products.find(item=>item.title=="SMPS"));













