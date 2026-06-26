// Always type params AND return value
function add(num1:number,num2:number):number{
   return num1+num2;
}
console.log("Sum : "+ add(10,60));

//Optional Parameter
function welcomeMessage(name:string ,text:string="Hello"):string{
  return `${text} , ${name}`;
}

console.log(welcomeMessage("Raju","Welcome"));
console.log(welcomeMessage("Ravi"));

//void does work return nothing
function logTestResule(result:boolean):void{
    console.log("Test Result : ");
    console.log(result ?"PASS":"Fail");  //? works as Ternary operator here 
}

logTestResule(true);

//Arrow Function
const multiply=(a:number,b:number):number=>a*b;

console.log("Mutilplications : "+multiply(10,20));

//Rest Parameter
function logTestStep(...steps:string[]):void{
    steps.forEach(step=>console.log(`[step] ${step}`));
}

logTestStep("Launch Browser","Navigate URL","Enter Credentials","Verify Logged In","LogOut");


//Function Types as a variable and callbacks
type testCallback=(success:boolean)=>void;  // creates custom function type called testCallback

function runTest1(uname:string,pwd:string, onDone:testCallback):void{
    console.log(`Login User : ${uname}`);
    const success=uname=="admin" && pwd=="password";
    onDone(success);  // callback function and success is boolean value passed into the callback
}

runTest1("admin","password" ,(result) =>{     
    console.log(result?"Login successful":"Login failed");                   
});



