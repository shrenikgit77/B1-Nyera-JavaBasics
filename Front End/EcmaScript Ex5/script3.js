let numbers = [90,45,18,90,47,100,78,18,42,11,45,56];

//Q1. increase even numbers by 1 and decrease odd numbers by 1

var answer = numbers.map(item=>{
    if(item%2==0)
    {
        item++;
    }
    else
    {
        item--;
    }

    return item;
});

console.log(answer);


//Q2. increase cost of product by INR 100 for the category "ELECTRONICS" and INR 500 for 
//    the category "SPORTS"

let products = [
    {code:9043, category:"ELECTRONICS", title:"Mouse", cost:800},
    {code:8942, category:"SPORTS", title:"Shoes", cost:5000},
    {code:8924, category:"ELECTRONICS", title:"Processor", cost:7000},
    {code:5398, category:"SPORTS", title:"Ball", cost:400},
    {code:8942, category:"ELECTRONICS", title:"RAM", cost:1500},
    {code:9043, category:"GROSSARY", title:"Rice", cost:1000},
];


var answer = products.filter(item=>item.category=="ELECTRONICS")
        .map(item=>{
            var object = {...item};
            object.cost = object.cost + 100;
            return object;
        });

for(var p of answer)
{
    console.log(p);
}


var answer = products.filter(item=>item.category=="SPORTS")
                     .map(item=>({...item, cost:item.cost+500}));

for(var p of answer)
{
    console.log(p);
}






