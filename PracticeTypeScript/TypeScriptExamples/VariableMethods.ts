console.log("Example of type script Variables - const, let and var");

//const : value cannot be changed
const empid = 101;
console.log("Employee ID : " + empid);
//empid = 102; //error : cannot assign a new value to a constant variable

//let : value can be changed
let institute = "Suresh IT";
console.log("Institute : " + institute);
 institute = "Academy"; //no error : value can be changed
console.log("Institute : " + institute);
//institute =123; // not assignble to string
//let institute=123; //cannot re decalre blocked scope variable

//var : value can be changed : Not Suggessed in real time 
var city = "Hyderabad";
console.log("City : " + city);
city="Sikandarbad";
console.log("City : " + city);
var city = "Bangalore"; //no error : value can be changed
console.log("City : " + city);
//var city=123; type must be string

 //methods-user defined
class Hello {  
 m1() : void {
    console.log("M1 Executed");
 } 
  m2() : void {
    console.log("M2 Executed");
 }
  m3() : void {
    console.log("M3 Executed");
 }
}