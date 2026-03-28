//var keyword

//Ex1
var x = 30;
var x = 50;

console.log("var x = " + x);                            //50
console.log("Re-Declaration of x = " + x);              //50

//Ex2
var b = 48;
b = 30;

console.log("var b = " + b);                            //30
console.log("Re-Assignment of b = " + b);               //30


//Ex3
var c = 1;
if(c!=0)
{
    var z = 100;
}

console.log("outside if scope, var z = " + z);                  //100

//Ex4
for(var i=1;i<=2;i++)
{
    var e = i+1;
}

console.log("outside for loop scope, var e = " + e);            //3

//Ex5
function test()
{
    var t = 193;
}

test();
console.log("outside function scope, var t = " + t);





/*
1) "var" overrights value with new value in case of Re-Declaration as well as Re-Assignment
2) "var" is function scope variable. in case a variable is declared inside function then variable only will 
    remain accessible inside function scope. otherwise it is global for other all the blocks like if, else, while etc

*/