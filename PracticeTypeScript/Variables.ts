// Variable is container which can hold different types of data
//var , let , const
let y: number ;  //global scope
y=60;
function newMethod()
{
    let y=45; //blocked scope
    // let y=46; cannot re decalre blocked scope varaible
    return y; //prints 60
}

function basicMethod()
{
    return y; //prints 40
}

console.log("Basic Method : " +basicMethod());
console.log("New Method : "+newMethod());

//Scope
//var is functional scope and let,const is blocked scope means within any { }
console.log("-------------------------------------------------");
function printVar()
{
    if(true)
    {
        var msg="hello";
        let msg1="world";
        const msg2="Greet";
        console.log(msg);
        console.log(msg1);
        console.log(msg2);
    }
     console.log(msg); //msg is accessible anywhere inside function prinVar() 
     //console.log(msg1+msg2); //Cannot find name 'msg1' and 'msg2' because let is blocked scope avaialble only within if block
}
//console.log(msg+msg1+msg2); //Cannot find name not available outside function
printVar();
console.log("-------------------------------------------------");

//Declaration/Assignment
var x; //we can declare without initialization 
let x1; //we can declare without initialization 
//const x2;// 'const' declarations must be initialized.
const x2=30;
console.log("Before initialization : "+x);
console.log("Before initializationec : "+x1); //both get undefined 

//initialization 
x=30; 
x1=40;
console.log("After initialization : "+x);
console.log("After initialization : "+x1);

//After - re initialization
x=100;
x1=120;
//x2=130; //Cannot re assign to 'x2' because it is a constant.
console.log("After Re initialization : "+x);
console.log("After Re initialization : "+x1);
console.log("-------------------------------------------------");

//Re Declaration - var is allowed for let,const not allowed
var q1=30;
var q1=50; // re declaration allowed with same type of value new value will be assigned
//but its not safe 
//var q1="John"; //re declaration not allowed with other type of value

let q5=30;
//let q5=40; //Cannot redeclare block-scoped variable 
const q6=50;
//const q6=60; //Cannot redeclare block-scoped variable 

//Hoisting - access variable before declaration
console.log("Host var before dec: "+ varbfrdec);  //undefined 
var varbfrdec=10;

try{
    console.log("Host let before dec: "+ letbfrdec); // Cannot access 'letbfrdec' before initialization   
}
catch(error){
    console.log(error);
}
try
{    
    console.log("Host const before dec: "+ constbfrdec); // Cannot access 'constbfrdec' before initialization
}
catch(error){
    console.log(error);
}
let letbfrdec=10;
const constbfrdec=10;
