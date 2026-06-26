interface IUser
{
    name:string,
    age:number
}

let User_Details:IUser[]=[
{name:"raju",age:30},
{name:"ravi",age:40},
{name:"ramu",age:50}
];

console.log(User_Details[0].name);
console.log(User_Details[2].name);
console.log("--------------------------");
for(let userData of User_Details)
{
    console.log(userData.name +" : "+ userData.age);
}
console.log("--------------------------");
User_Details.forEach(userData=>{
    console.log(userData.name +" : "+ userData.age);
});

