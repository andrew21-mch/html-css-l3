// Loops in js
// helps you to run a block of code multiple times based on a particular condition.

// For loop

//  for  (initialization; condition; increment/decrement){
//     // code to be executed
// }


 for (let i = 0; i <= 5; i++){
    if(i === 3){ // checks both for the type and the value
        continue;
    }
    console.log('Loop Number '+ i)
    
 }

//  While loop
// executes a block of code as long as the condition is true.

// while(condition){
//     // code to be executed
// }

let i = 0;

while(i <= 5){
    console.log('While Loop Number '+ i)
    i++;
   
}

// Do while loop
// executes a block of code once, then repeats the loop as long as the condition is true.
// do {
//     // code to be executed
// } while (condition);

let j = 2;
do {
    console.log('Do While Loop Number '+ j)
    j++;
}while(j <= 5)


// for in loop
// loops through the properties of an object.

let person = {
    name: "John",
    age: 25,
    country: "USA"
}

for (let key in person){
    if(key == 'name'){
        alert('You name is '+ person[key])
    }
}