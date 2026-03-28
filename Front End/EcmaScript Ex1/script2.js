//let keyword

//Ex1
let x = 39;
// let x = 60;

console.log("let x = " + x);
console.log("Re-Declaration of let x = " + x);

//Ex2
let y = 94;
y = 100;

console.log("let y = "  + y);
console.log("Re-Assignment of let y = " + y);

//Ex3
let z = 1;
if(z!=0)
{
    let s = 100;
}

// console.log("outside if block scope = " + s);       //Error

//Ex4
for(let i=1;i<=2;i++)
{
    let e = i+1;
}

// console.log("outside for loop scope = " + e);       //Error

//Ex5
function test()
{
    let t = 39;
}

test();

console.log("outside function scope, t = " + t);        //Error





/*
1) "let" not supports Re-Declaration
2) in "let" declaration, Re-Assignment will overright value with new value
3) "let" is block scope variable. Any variable declare inside any type of block will remain only accessible within
   the block

*/