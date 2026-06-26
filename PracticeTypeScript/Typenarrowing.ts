//Type narrowing
//typeof 
console.log("-----------typeof------------------");
function processId(id:string|number):string{
    if(typeof id==="string")
    {
        return id.toUpperCase();
    }
    else
    {
        return id.toFixed(3); //makes floating and returns string of that number
    }

}
console.log("Typeof : "+processId("admin"));
console.log("Typeof : "+processId(12.3)); //prints 12.300
console.log("Typeof : "+processId(12.3456));  //prints 12.346

//instanceof
console.log("-----------instanceof------------------");
const err=new Error("Database Failed");
console.log(err instanceof Error);
function handleError(error:Error|string):void{
    if(error instanceof Error ) // This asks is this objct created from Error class
    {
        console.log(error.message);
    }
    else
    {
        console.log(error);
    }
}
handleError(new Error("Database connection failed"));
handleError("Username not found");

//in operator — check if a property exists
console.log("------------in operator-----------------");
const movie ={
    name:"bahubali",
    year:2015
}
const exists="name" in movie;
console.log(`name is movie exists : ${"name" in movie}`); //movie has a property called "name"

console.log("-------------------------------------------------");
interface ApiError{
    code:number;
    message:string;
}
interface NetwrokError{
    status:number;
    url:string;
}

function logError(err:ApiError|NetwrokError):void{
    if("code" in err)
    {
        console.log(`API Error code : ${err.code}`)
        console.log(`API Error message : ${err.message}`)
    }
    else
    {
        console.log(`Netwrok Error Status : ${err.status}`)
        console.log(`Netwrok Error URL : ${err.url}`)
    }
}

logError({code:500,message:"Server Error"});
console.log("-------------------------------------------------");
logError({status:401,url:"https://err.com"});
//The below get is not assignable to parameter of type 'ApiError | NetwrokError at compilation if nt any is specified 
//function logError(err:any):void{
//logError({ code: 500 });
//logError("Hello"); 
//logError(123); 
//logError(true); 

console.log("-------------------------------------------------");