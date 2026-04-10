
let p1 = Promise.resolve("Task1");
let p2 = Promise.resolve("Task2");

Promise.all([p1, p2])
       .then(result=>console.log(result));