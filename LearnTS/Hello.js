//First Program
console.log("Typescript Variable Const var let");
//const - value cannot be changed
const empid = 102;
//empid=103; Error: Cannot assign to 'empid' because it is a constant.
console.log("Employee Id: " + empid);
//let: value can be changed and re assignment is allowed
let myname = "raju";
myname = "Raja"; // no error re assignment
//let myname="ravi"; error cannot re decalre blocked scope variable 
console.log("Myname: " + myname);
//var : value can be changed :not suggested because it allows re decalre same variable
var city = "Hyderbad";
city = "Davanagere";
var city = "Bengaluru"; // no error in re declare
console.log("city: " + city);
export {};
