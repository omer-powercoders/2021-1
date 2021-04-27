//global scope
var variable;
let globalLet;

console.log(variable);

function(){
    //function scope = scope
    var test = "test";
    var test = 5;
    if(){
        console.log(test); // variable exists, no error
    }
    console.log(globalLet);  // variable exists, no error
}
console.log(test) // error message: variable is not declared

while(){
    //block scope = local scope
    let y = 5;
    const pi = 3.14;
    alert(pi);
    for(let i=0;...){
        
    }
}
alert(pi) // error message: variable is not declared

for(let i=0;...){
    const pi = "test";
    pi = 3.14; // error
    const pi = 3.14 // error


}
console.log(y) // error message: variable is not declared