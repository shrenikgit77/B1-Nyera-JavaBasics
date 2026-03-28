//Ex1
// var number = 10;
// let number = 20;


// console.log("number = " + number);

//Ex2
let x = [11,12,13];
let y = [x,100];                    //"x" is reference in "y". change made by y will also change in x

y[0][0] = 21;
y[0][1] = 22;
y[0][2] = 23;
y[1] = 200;

console.log(x);

//Ex3
let p = [11,12,13];
let q = [...p, 100];                //... is a spread operator. used to copy array

q[0][0] = 21;
q[0][1] = 22;
q[0][2] = 23;
q[1] = 200;

console.log(p);




