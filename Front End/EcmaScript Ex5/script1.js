//Array Functions : on linear array collection, you can perform most common operations
//                  like sorting, modifying values, filtering, searching, arithmetic calculations

/* 
    map function
    --------------
    1) "map()" is array function used to modifying array collection
    2) "map()" function has callback function and callback function has
        two arguments, first is "item" and second is "index"
            "item" represents each array value
            "index" is position of array value
    3) "map()" function default return value is "undefined"
    4) "map()" function return type is []
    5) "map()" function preserves original data ie. changes will be done as copy of array

*/


let numbers = [98,45,18,41,52,63];

var answer = numbers.map((item,index)=>{
    console.log(item + "   =>   " + index);
});

console.log(answer);

var answer = numbers.map((item,index)=>{
    return item+10;
})

console.log(answer);
console.log(numbers);


let products = [
    {code:8934, title:"mouse", cost:800},
    {code:8924, title:"keyboard", cost:1600},
    {code:7842, title:"speaker", cost:1800},
    {code:8911, title:"RAM", cost:500},
    {code:7843, title:"processor", cost:6000},
];

// var answer = products.map((item,index)=>{
//     item.cost = item.cost + (item.cost*10/100);
//     item.title = item.title.toUpperCase();

//     return item;
// });


var answer = products.map((item,index)=>{
    //map() function is unsafe for Array of objects as "Object" is a reference and unless
    //Object you freeze calling "Object.freeze()" function it is modifyable. Thats why
    //copy attributes of object into a new variable and then make necessory changes
    
    var object = {...item};
    object.cost = object.cost + (object.cost*10/100);
    object.title = object.title.toUpperCase();    

    return object;
});

console.log("answer");
for(var p of answer)
{
    console.log(p);
}

