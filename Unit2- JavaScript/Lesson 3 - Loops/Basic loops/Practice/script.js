// TODO 1: Create an array called 'numbers' with 5 random numbers
const number=[3,2,12,42,511];


// TODO 2: Use a 'for' loop to log each number in the array to the console
for(i=0;i<5;i++){
    console.log(number[i])
}

// TODO 3: Use a 'while' loop to log numbers less than 5 from the array
let count=0;
while(count<5){
    console.log(number[count]);
    count++;
}

// TODO 4: Use a 'do...while' loop to ask the user for a number between 1 and 3
let setnum;
do{
    setnum=prompt("Enter a number between 1 and 3");
}while(setnum<1 || setnum>3)


