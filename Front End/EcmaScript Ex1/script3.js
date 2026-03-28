//const 

//Ex1
const product = {code:4891, title:"mouse", cost:999};

Object.freeze(product); //freeze the object. 

product.code=7845;
product.discount=100;

console.log(product);


/*
1) "const" not allow Re-Declaration as well as Re-Assignment
2) "const" is block scope variable. Any variable declare inside any type of block will remain only accessible within
   the block
3) Object.freeze(object_name) is freezing state of object. Though you try modify, function
   ignores all the changes

*/