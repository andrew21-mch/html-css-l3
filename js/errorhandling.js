const pi = 3.14;

try {
    pi = 3.14159;
}catch(err){
    console.log("ERROR: " + err.message);
}

console.log(pi);

console.log(Number.MAX_SAFE_INTEGER);