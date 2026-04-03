//inheritance

//Parent class
class Book
{
    constructor(id=1941, name="HTML Programming", cost=900.00)
    {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}

    //Child class
    class Novel extends Book
    {
        constructor(authorName="Jamed devid", id, name, cost)
        {
            super(id, name,cost);
            this.authorName = authorName;
        }
    }


let n1 = new Novel();
console.log(n1);