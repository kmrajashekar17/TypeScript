try {
    let name : any = "SureshIT";
    console.log(name.length);
}
catch (error) {
    console.error("An error occurred: ", error);
}
finally {
    console.log("This block will always execute.");
}
console.log("----------------------------");
try {
    let sub : number[] = [10,20,30,40,50];
    console.log(sub[12]);
}
catch (error) {
    console.error("An error occurred: ", error);
}
finally {
    console.log("This block will always execute.");
}
console.log("----------------------------");
try {
    let name : any = null;
    console.log(name.length);
}
catch (error) {
    console.error("An error occurred: ", error);
}
finally {
    console.log("This block will always execute.");
}
console.log("After Error");
console.log("----------------------------");
try {
    let name : any = "SureshIT";
    console.log(name.length);
}
catch (error) {
    console.error("An error occurred: ", error);
}
finally {
    console.log("This block will always execute.");
}
console.log("----------------------------");
try {
    console.log("Test started");

    let a = 10;
    let result = a / 0;

    console.log(result);

} catch (error:unknown) {
    if(error instanceof Error)
    {
        console.log("Message : "+error.message);
    }
    console.log("Error occurred:", error);

} finally {
    console.log("Test completed");
}
console.log("----------------------------");
console.log("----------------------------");
try {
    let name : any = null;
    console.log(name.length);
}
catch (error:unknown) {
    if(error instanceof Error)
    {
        console.log("Message : "+error.message);
        console.log("Message : "+error.toString());
        console.log(JSON.stringify(error, null, 5));
    }
    else
    {
        console.log("Error occurred:", error);
    }
}
finally {
    console.log("This Finally block will always execute.");
}
console.log("After Error");
console.log("---------Throw-------------------");
try {
    let a = 10;
    if (a > 5) {
        throw new Error("Value is too large");
    }

} catch (error:unknown) {
    if(error instanceof Error)
    {
    console.log("Caught error:", error.message);
    console.log("Message : "+error.toString());
    }
    else
    {
        console.log("Error occurred:", error);
    }
}
console.log("----------------------------");
console.log("----------------------------");