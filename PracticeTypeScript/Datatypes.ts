console.log("Typescript is static typed programming language and Its type safety");
let first :number =123;
let color1:number =0x67CF; //equals 26575 in decimal 0x = "Hey I'm secretly a decimal but I dress in hex."
let third:number= 0o455;
let fourth:number= 0b110100;
let fifth:number=3.14;

let employeeName:string="Vijay Joseph";

let isPresent:boolean=true;

let fruits:string[]=["mango","banana"];
let fruits1:Array<string>=["mango","banana"];

console.log(first +" - Type of first is : "+ typeof(first));
console.log(color1 +" - Type of color1 is : "+ typeof(color1));
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(employeeName +" - Type of employeeName is : "+ typeof(employeeName));
console.log(isPresent);
console.log(fruits);
console.log(fruits1);

function sum(x:number,y:number) :number
{
    return x+y;
}

console.log('sum : '+sum(10,8));

let stringnum:string="20.00";
console.log('sum : '+sum(parseInt(stringnum),30));

function welcome(message:string):string
{
 return "Welcome "+message;
}

let user="Raj";
console.log(welcome(user));

let  firstname:string="John";
let  lastname:string='KM';

let fullName: string=`My, FirstName is ${firstname} and LastName is ${lastname}`;
console.log(fullName);
console.log(`First Name is ${firstname} `);

let color: string = "blue";
let fullName1: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName1} and I'll be ${age + 1} and my color is ${color} next year.`;

console.log(sentence);

//any - violates type safety its dynamic typed , use when you not sure of data you store 
let anyvar:any="string data";
console.log("Any Var value : "+anyvar +" And its type : "+ typeof anyvar);
anyvar=10;
console.log("Any Var value : "+anyvar +" And its type : "+ typeof anyvar);
anyvar=true;
console.log("Any Var value : "+anyvar +" And its type : "+ typeof anyvar);

//Union types - this or that
//sytax : let varibleName:type1|type2; varibleName can hold of value of type1 or 2
//-----null
//variable must be assigned before being used 
let userID:number |null;  // A variable can hold number or null 
//console.log("null userId : " ,userID); //compile time error - Variable 'userID' is used before being assigned.
//but it still run and print undefined if we run

let a: number | null;        // undefined — declared, never assigned. ghost.
let b: number | null = null; // null — intentionally empty. honest ghost.
let c: number | null = 5;    // 5 — actually has a value. not a ghost at all.
console.log("Value of C :"+ c);
console.log("Value of B :"+b); //null

let id:string|number|boolean ="Abc123";
console.log("Id value String: "+ id +" And its type : "+ typeof id)
id=1234;
console.log("Id Value number : "+id +" And its type : "+ typeof id)
id=true;
console.log("Id Value boolean : "+id +" And its type : "+ typeof (id))

//--undefined
let userName:string|undefined; // declared but not set yet
console.log("undefined userName : " + userName); // undefined

//optional chaining - don't crash when something might be null
let user1={address:null};
console.log("Address : "+user1.address); //null

//Literal types — exact values only
type Method="GET"|"POST"|"PUT"|"POST";
let httpMethod:Method="GET"
//let bad:Method="YOLO"; //Type '"YOLO"' is not assignable to type 'Method'.

type StatusCode=100|200|300|400;
let code:StatusCode=100;
//let code1:StatusCode=999; //Type '999' is not assignable to type 'StatusCode'.

type Environment="DEV"|"PROD"|"QA";

function runTest(env:Environment):void
{
    console.log(`Running on Env :  ${env}`);
}

runTest("PROD");
//runTest("Local"); // ERROR — prevents typos!


//Interfaces — give your data a shape
interface User {
    //Decalre variables f User with types
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role?: string;   // ? means optional — may or may not exist
}

function loginUser(user:User):string{
    return `Welcome ${user.name}`;
}

const testUser:User={
id:101,
name:"Raju",
email:"xx@yy.com",
isActive:true
//Skipping role as its optional
}

const testUser1:User={
id:101,
name:"Ravi",
email:"xx@yy.com",
isActive:true,
role:"QA"
}

console.log(loginUser(testUser));
console.log(loginUser(testUser1));

//Interface via Type alias — two ways to do the same thing:
type FanList={name:string,id:number};
const fan1:FanList={
name:"Usha",
id:123
}

console.log("Fan Name : "+ fan1.name);