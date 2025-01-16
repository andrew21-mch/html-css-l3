// Control Flows

// Conditional Statements

// if statement

let age = 25;

console.log("Checking age using If statement");
if( age < 18){
    console.log("You are an adult");
}


// if(condition){
//     // code to be executed
// }


// if else statement

console.log("Checking age using If else statement");
let age1 = 25;

if( age1 > 18){
    console.log("You are an adult");
}else {
    console.log("You are a minor");
}

// if, else if and else statement
console.log("Checking age using If else if and else statement");
let age2 = 25;
if( age2 < 18){
    console.log("You are a minor");
}
else if(age2 >= 18 && age2 <= 30){
    console.log("You are an adult");
}

else if(age2 > 30){
    console.log("You are old");
}
else{
    console.log("You are old");
}

// a && b => // only going to be true when both a and b are true
// a || b => // only going to be true when either a or b is true


// Switch statement

// let day = prompt("Enter a random day number");

let day = 1
switch(day){
    case 1: // day == 1
        console.log("First day of the week");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}