const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1==id2); //false


const user = {
    name:"Ashish",
    [id1]:101,
    [id2]:102,
    [Symbol("id")]:103
}

console.log(user);
console.log(user.name);
console.log(user[id1]);
console.log(user[id2]);


/*
1) Symbols prevent property name conflicts in object
2) Hide internal details from normal object interation

Concept                 What it is?                                     
Callback                Function passed to another function
Closure                 Function + remembered scope
Symbols                 Unique primitive key

*/