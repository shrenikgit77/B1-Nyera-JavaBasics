//String Function

var greetings = " Your work      was awesome ";

//1. length()       : count of characters in string
console.log(greetings.length);

//2. toUpperCase()  : convert string to uppercase
console.log(greetings.toUpperCase())

//3. toLowerCase()  : convert string to lowercase
console.log(greetings.toLowerCase())

//4. trim()     : remove leading/trailing spaces
console.log(greetings.trim())

//5. slice()     : returns part of string
console.log(greetings.slice(1,5));

var coding = "python,java,sql,javascript,vba";
//6. split()     : split string from a delimiter
console.log(coding.split(","))
