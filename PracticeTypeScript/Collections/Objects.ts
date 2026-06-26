//Declare Objects
let personDetails={
    name:"raju",
    age:30
}
console.log("--------------------------");
console.log("--Access using Dot--");
console.log(personDetails.name);
console.log(personDetails.age);
console.log("--------------------------");

console.log("--Access using Bracket--");
console.log(personDetails["name"]);
let key: keyof typeof personDetails = "age";
console.log(personDetails[key]);
console.log("--------------------------");

console.log("--object destructing--");
let {name:personName,age:personAge}=personDetails;
console.log(personName);
console.log(personAge);
console.log("--------------------------");
console.log("Loop Objects usng for..in");
for(let key in personDetails)
{
    console.log(key + " : "+ personDetails[key as keyof typeof personDetails]);
}
console.log("---------Entries-----------------");
Object.entries(personDetails).forEach(([key, value]) => {
    console.log(key, value);
});
