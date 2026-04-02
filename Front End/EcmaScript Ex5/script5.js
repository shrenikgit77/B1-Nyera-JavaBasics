/* reduce function 
   ----------------

   1) reduce() is array function used to calculate maths
   2) reduce() funcion has callback function. And callback function has two arguments, 
            first is "previous" that holds initial/default value
            and second is "current" that points each array value sequencially
   3) defualt return value is "undefined" And on returning a value, "previous" gets update

*/


let numbers = [5,4,9,1,7,8,3];

numbers.reduce((p,c)=>{
    console.log(p + " => " + c);
    return 1000;
}, 0);

numbers.reduce((p,c)=>{
    console.log(p + " => " + c);
    return p+c;
}, 0);

var answer = numbers.reduce((p,c)=>{
    return p+c;
}, 0);

console.log(answer);

let products = [
    {code:8934, title:"mouse", cost:800},
    {code:8924, title:"keyboard", cost:1600},
    {code:7842, title:"speaker", cost:1800},
    {code:8911, title:"RAM", cost:500},
    {code:7843, title:"processor", cost:6000},
];


var answer = products.reduce((p,c)=>p + c.cost, 0);        //(0+800)  (800+1600) (2400+1800) .... so on
console.log(answer);

