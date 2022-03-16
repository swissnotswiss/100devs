// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let dv = false;
alert(dv);

// Dclare a variable, reassign it to your favorite color, and console log the value

let col = 'brown';
col = 'blue';
console.log(col);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function times (a,b,c,d){
    return (a+b+c) / d
};
times(1,3,5,7)
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNum(a,b){
    console.log(Math.pow(a,b));
}
twoNum(3,3)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function k2(b, str){
    if (b){
        alert(str);
    }else {
        console.log(str);
    }
}




//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz (num){
    for(let i = 1; 1 <= num; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log("fizzBuzz")
        }else if (i % 5 === 0){
            console.log('Buzz')
        }else if (i % 3 === 0){
            console.log("fizz");
        }else{
            console.log(num)
        }
    }
}