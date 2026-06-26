console.log("-------------------------------------------------");
function getFirstString(arr:string[]):string{
    return arr[0];
}

function getFirstNumber(arr:number[]):number{
    return arr[0];
}

console.log("First String : "+getFirstString(["banana","mango","apple"]));
console.log("First Number : "+getFirstNumber([23,45,1,34]));

//Here both function return same first value only change is type of value, if we need boolean we add one more function
//More duplicate code
//Instead make type generic
console.log("-------------------------------------------------");
function getFirst<T>(arr:T[]):T{

    return arr[0];
}
console.log("First String : "+getFirst<string>(["banana","mango","apple"]));
console.log("First Number : "+getFirst<number>([23,45,1,34]));
console.log("Auto Infered: "+getFirst(["FirstString","SecondString"]));  
//No <string specified>, based on value type TypeScript decides type of T
console.log("---------------Echo------------------------");

function echo<T>(data:T):T{
    return data;
}

console.log("With Generics : "+echo("Raj").toUpperCase()); //with generics we have type safety
console.log("With Generics : "+echo(123).toFixed(2));
//if we use any instead T Tyescript losses type
function echo1(data:any):any{
    return data;
}

console.log("With any : "+echo1("raj").toUpperCase()); 
console.log("With any : "+echo1(123).toFixed(2));
//No IntelliSense and checking. for 'any type' TypeScript allows 'any method call' but no checking of type
try
{
    console.log("With any : "+echo1("raj").toFixed(2));     
}
catch(error)
{
    console.log("with generic TypeScript intellisense give type-safe suggestions. bot not not for 'any' type");
}

//run time it throws error
console.log("-------------------------------------------------");