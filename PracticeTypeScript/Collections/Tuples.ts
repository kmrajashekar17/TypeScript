let cartoon:[string,number,boolean];
//pos0 - string ,pos1-number ,pos3-boolean fixed cannot be chnaged each position has meaning

let loginData:[string,string] =["Admin","Password"];

//accessing
console.log("Uname : " + loginData[0]);
console.log("Pwd : "+loginData[1]);

//Destructuring tuples
const[loginUname,loginpwd]=loginData;
console.log("LoginUname : " + loginUname);
console.log("LoginPwd : "+loginpwd);

//Tuple Array
const loginCases:[string,string][]=[
["admin","password"],
["user1","pass123"],
["User2","pass234"]
]

console.log("Tupled Array");
for(const [uname,pwd] of loginCases)
{
    console.log(uname + " : "+ pwd);
}

let testResult:[string,boolean];
testResult= ["Login Test",true]; //Assign later
testResult[1]=false; //Assign individual
console.log("Test Result : "+testResult[0] + " : "+ testResult[1]);