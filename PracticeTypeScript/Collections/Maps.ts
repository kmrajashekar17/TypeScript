console.log("--------------------------");
//Declare Map
let map_credentials=new Map<string,string>();

//Assign keys and values
map_credentials.set("username","raju");
map_credentials.set("password","123");

//acccess keys and values
console.log("UserName : "+ map_credentials.get("username"));
console.log("UserName Exist : "+ map_credentials.has("password"));
console.log("Credentals Size : "+ map_credentials.size);
console.log("--------------------------");
map_credentials.forEach((value,key)=>{
    console.log(key +" - "+ value);
})
console.log("--------------------------");
console.log("Map Keys : ");
for(const value of map_credentials.keys())
{
    console.log(value);
}
console.log("--------------------------");
console.log("Map Values : ");
for(const value of map_credentials.values())
{
    console.log(value);
}
console.log("--------------------------");
console.log(map_credentials);
//Delete particular value
map_credentials.delete("username");
console.log(map_credentials);
console.log("--------------------------");
//delete allkey and values
map_credentials.clear();
console.log(map_credentials);
console.log("--------------------------");