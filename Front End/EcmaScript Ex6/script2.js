
/* 
    Points to remember
    1) using keyword "consturctor" you can define constructor function
    2) only one constructor function is allowed in a class that itself serves as
       defualt + parameterized constructor.
*/

class Book
{
    constructor(id=101, name="HTML", cost=8000)
    {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}


//calling default constructor
let b1 = new Book();
console.log(b1);

//calling parameterized constructor
let b2 = new Book(2841, "SQL Programming", 7500.00);
console.log(b2);