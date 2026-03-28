//Javascript Array Functions

var numbers = [93,89,42,89,90,41,53,19,42];

//1) indexOf()     : search array value and returns index number if value exist ow returns -1

var pos = numbers.indexOf(42); //2
console.log(pos);

//2) sort()        : arrange array values in ascending or descending order
numbers.sort(function(a,b){return a-b});
console.log(numbers);

numbers.sort(function(a,b){return b-a}); //descending order
console.log(numbers);

var users = [];

//3. push()         : append at last
users.push("smith");
users.push("james");
users.push("eliz");

console.log(users);

//4. pop()          : delete the last
users.pop();
console.log(users);

//5. shift()        : remove first value
//6. unshift()      : add at the first

users.shift()
users.unshift("praneet");
users.unshift("aditya");

console.log(users);

//5. splice()       : remove array values as well as returns removed array values
var numbers = [11,12,13,14,15,16,17,18,19,20];

//remove 5 array values starting from index 3
var removed = numbers.splice(3,5);
console.log(numbers);
console.log(removed);




