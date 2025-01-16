function greet(){
    alert("Hello, World!");
}

greet();

function add(a, b){
    return a + b;
}

document.querySelector('h1').textContent = add(2, 4);

console.log(add(2, 4));

let result = add(5, 6);

for (let i = 0; i < result; i++){
    console.log(i);
}

