//Typed Arrays
let testUserNames :string[] =["raju","ravi","rakesh","ramu"];
let statusCodes:Array<number>=[200,100,201,404];
let flags:boolean[]=[true,false,false,true];

//accessing values
console.log(testUserNames);
console.log(statusCodes);
console.log(flags);
console.log("StatusCode : " +statusCodes[2]);  //index starts with zero

//Length
console.log("The Length of TestUserNames : "+ testUserNames.length);

//Empty Array
let users:string[]=[];
//push() - Appends new elements to the end of an array, and returns the new length of the array. and does not return new array
users.push("Raj");
users.push("Ravi");
users.push("Rakesh");
console.log("length of the users Array : "+users.push("Naveen"));
console.log("Users array : ", users);
console.log("Users : "+users);

//unshift() - Inserts new elements at the start of an array, and returns the new length of the array.
console.log("After Unshift");
console.log("New Length of users : "+users.unshift("FirstName"));
console.log("New Users : ",users);  

//Shift() - remves first element and doest not return a new array , it returns removed element
users.shift(); 
console.log("Shift");
console.log("Users : "+users);

//pop() : removes last element , does not return a new array , it returns removed element
console.log("Remove by pop");
users.pop(); 
console.log("Users : "+users);

//looping through
console.log("Loop Through : ")
for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}

//Using for of
console.log("Loop Through using for of : ")
for(const user of testUserNames)
{
    console.log(user);
}

//forEach
console.log("Loop Through using for each : ")
users.forEach(user=>console.log(user));

//map() - tranforms each item
let numbers:number[]=[2,3,6];
let doubled=numbers.map(n=>n*2);

console.log("Doubled Numbers : "+doubled);

//filters - returns all matching item
let nums:number[]=[1,2,3,4,5,6,12];
let evens=numbers.filter(n=>n%2==0);
console.log("Even Numbers: "+ evens);

//find() - returns first matching item
let firstMatch=nums.find(n=>n>5);
console.log("Find First Match : "+firstMatch);

//includes() - check existence
let fruits2=["Apple","Mango","Orange"];
console.log("fruits Includes Mango : "+fruits2.includes("Mango"));

//Array of Objects
let newusers =[
    {name:"Raj",age:23},
    {name:"Ravi",age:35}
]

console.log("First User : "+newusers[0].name +" and his Age : "+newusers[0].age);

//Typed Object Arrays
type TypedUser={
    name:string,
    age:number
}

let typesusers:TypedUser[]=[
    {name:"Raj",age:23},
    {name:"Ravi",age:35}
]

console.log("access Typed Array Value : " + typesusers[0].name);
console.log("access Typed Array Value : " + typesusers[1].name);

//Multi-Dimensional Array
let matrix:number[][]=[
[1,2],
[3,4],
[5,6]
];

console.log("Matrix : "+ matrix[2][1]);

//Spread Operator
let arr1=[1,2,3];
let arr2=[4,5,6];

let combined=[...arr1,...arr2];
console.log("Combined Array : "+ combined);

//Array Destructuring 
const desArray:number[]=[2,3,4,5];

const[des1,des2,des3]=desArray;  //des1 will be 2 and des2 wil be 3 ...
const[des4, ,des5]=desArray;  //des4 will be 2 and des5 will be 4 - skip element

//print 
console.log("Des1 : "+des1);
console.log("Des2 : "+des2);
console.log("Des3 : "+des3);
console.log("Des4 : "+des4);
console.log("Des5 : "+des5);

//PlayWright example
const credentials = ["admin", "password"];
const [username, password] = credentials;

console.log(username); // admin
console.log(password); // password

//slice() - Returns a copy of a section of an array. - it can accepts 1 or 2 param
function sliceMethod()
{
    var basicArray=[32,56,45,78,72,94,98];
    console.log("basic array : ", basicArray);

    var slice_array=basicArray.slice(2); //starts from 2 to till last 
    console.log("positive Slice array ; ",slice_array);

    var negslice_array=basicArray.slice(-3);  //last 3 elements
    console.log("Negative Slice array ; ",negslice_array);
    
    var twoslice_array=basicArray.slice(3,6); //starts from 3rd pos to ends at 5(just before 6)
    console.log("positive two Slice array ; ",twoslice_array);
    
    var negTwoSlice_array=basicArray.slice(-5,-1); //stars from -5 to -2(just before -2) 
    console.log("Negative two Slice array ; ",negTwoSlice_array);

    var pos_neg_Slice_Array=basicArray.slice(0,-3); //starts from 0 and excludes last 3 elements
    console.log("Pos and Neg Array " , pos_neg_Slice_Array);

    var stringOne="This is my first typescript class";
    console.log("String : "+ stringOne);
    var slice_string=stringOne.slice(2);
    console.log("Slice String : " + slice_string);

    var two_slice_string=stringOne.slice(0,7); //starts from 0 to 6th pos and space also counts as position
    console.log("Two Slice String : " + two_slice_string);
}

sliceMethod();
