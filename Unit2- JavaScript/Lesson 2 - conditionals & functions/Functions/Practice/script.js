// Practice Set for Functions

// TODO 1: Create a function named "sayHello" that takes one parameter "name"
// The function should log "Hello, [name]!" to the console
// Call the function with your name as the argument

function sayHello(name){
    console.log("Hello "+ name + "!");
}
sayHello("Ernest");
// TODO 2: Create a function named "addNumbers" that takes two parameters "a" and "b"
// The function should return the sum of "a" and "b"
// Log the result of calling the function with any two numbers

function addNumbers(a, b){
    return a+b;
}
console.log(addNumbers(1, 1));
// TODO 3: Create a function named "isEven" that takes one parameter "number"
// The function should return true if the number is even, and false if it's odd
// Call the function with any number and log the result
function iseven(x){
let even= x%2==2;

}
console.log(iseven(2));
// TODO 4: Create an arrow function named "multiplyNumbers" that takes two parameters "x" and "y"
// The function should return the product of "x" and "y"
// Call the function with any two numbers and log the result
function multiplyNumbers(x, y){
    return x*y;
}
console.log(multiplyNumbers(2, 2));
// TODO 5: Create an arrow function named "divideNumbers" that takes two parameters "x" and "y"
// If "y" is zero, the function should return "Cannot divide by zero"
// Otherwise, it should return the result of dividing "x" by "y"
// Test the function with values where "y" is zero and where "y" is not zero
const divideNumbers = (x, y) =>{
    if(y==0){
        return "Cannot divide by zero"
    }else {
        return x*y;
    }
    
} 
let test1=divideNumbers(2,0);
console.log(test1);
let test2=divideNumbers(2,2);
console.log(test2);

// TODO 6: Create a function named "square" using the traditional function syntax
// The function should take one parameter and return its square value
// Then, create the same function using the arrow function syntax

function square(x){
    return x*x;

}
const sq=(x)=>x*x