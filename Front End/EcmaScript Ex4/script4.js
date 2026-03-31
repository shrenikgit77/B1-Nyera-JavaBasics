//Object Destructuring


//Example1
let players = ["Sachin", "Smith", "James", "Harry", "Kang", "Eliz"];
let [coach, capton, ...fielders] = players;

console.log(coach);
console.log(capton);
console.log(fielders);

//Example2
let numbers = [11,12,13,14,15,16,17,18];
let x = [...numbers, 21,22];
console.log(x);

//Example3
let p = [9,10,11];
let q = [21,22,...p];

console.log(q);


//Example4
const employee = {id:9184, name:"Vinod", salary:"$900", department:"Accounting", locatin:"USA", zone:"NORTH", block:"Wing B"};
const {name:profile, department:dept} = employee;

console.log(profile, dept);

//Example5
let student = {name:"Arun", age:22};

student = {...student, location:"INDIA", branch:"SCIENCE"};

console.log(student);



