/* Encapsulation in Javascript */

class Book
{
    #name;              // # = private
    _cost;              // _ = protected

    constructor(id, name, cost)
    {
        this.id = id;
        this.#name = name;
        this._cost = cost;
    }
}

let b1 = new Book(2894, "HTML Programming", 800);
console.log(b1.id);
// console.log(b1.#name);       private modifier attribute accessible only within the class
console.log(b1._cost);