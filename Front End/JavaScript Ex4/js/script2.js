//Array in JavaScript

//Single Dimentional Array
var numbers = [90,14,53,63,74,74];

console.log(numbers[2]); //53

//Multi Dimentional Array
var m1 = [[11,13,14], [19,20,56], [90,53,52]];

console.log(m1[1][0]);  //19

//Associative Array or Object
var product = {code:8934, title:"mouse", cost:899};

console.log(product.title);

//Object Array
var orders = [
    {code:419, date:"09-Mar-2025", product:"mouse", cost:899, qty:4},
    {code:982, date:"08-Apr-2025", product:"speaker", cost:600, qty:1}
]

for(var i=0;i<orders.length;i++)
{
    console.log(orders[i].date);
}