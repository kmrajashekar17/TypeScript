//Even OR Odd
console.log("-----------------------------")
function evenOrOdd(a:number):boolean
{
    if(a%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log("EvenorOdd 2: "+evenOrOdd(-1));
console.log("EvenorOdd 5: "+evenOrOdd(5));
console.log("-----------------------------");

//count characters
function countcharacters(str:string):void{
let str1:string="L T";
console.log("The Length of :"+str+" is :"+str.length);
console.log("The Length of :"+str+" is :"+str1.length);
}
countcharacters("L  T");
console.log("-----------------------------")

//split stringIntoInArray
function ConverstringIntoArray(str:string):void{
    let splitString:string[]=str.split(" ");
    console.log("Split String : "+splitString);
}
ConverstringIntoArray("Learn TypeScript in 2026");
console.log("-----------------------------");

//join Array
var basicArray=[4,6];
var join_Array=basicArray.join("~");
console.log("Join Array : "+join_Array);
console.log("-----------------------------");

//change name using join and replace
function changeName(profileName:string):void{    
    let splitString:string[]=profileName.split(" ");
    console.log("Changed name using join : "+splitString.join("_"));
    console.log("Changed name using replace : "+profileName.replace(" ","_"));
}
changeName("raja shekar.jpg");
console.log("-----------------------------");

//Reverse string by using pre defined or array
function reverseString(text:string):string{
//split("") - array of characters
//reverse() - reverse order of elements and returns array
//join() - combines into string and returns a string
console.log("Original String : "+text);
    return text.split("").reverse().join("");
}
console.log("Reversed String : "+reverseString("Raja"));
console.log("-----------------------------");

//reverse all the words in a sentance use trim() , split(" "), reverse() , join("")
function reverseAllWords(sentenace:string):string{    
    console.log("Original sentenace : "+sentenace);
    let splitData:string[]=sentenace.trim().split(/\s+/);     
    console.log(splitData); //displays with the actual array structure.
     console.log("Split Data: ",splitData); // with , displays with the actual array structure.
    console.log("Split Data: "+splitData);   //with + Its cancatenation so JS automatically converts array into string  by using .toString()
    //like ["this","is","my","typescript","class"].toString() becomes this,is,my,typescript,class - structure lose
   return splitData.reverse().join(" ");
}
console.log("Reversed words in sentenace : "+reverseAllWords("this is my typescript class"));
console.log("-------------------------------------");

/* Split(" ") - It spilts wherever it finds exactly one space character
ex:- "this    is     my    class"; results in ["this","","","","is","","","","","my","","","","class"]
split(/\s+/) 
/\s means any white space character such as space,tab,newline and + means one or more so it Split on one or more whitespace characters.
let text = "this    is     my    class"; or let text = "this\tis\nmy class"; should still work 
reg expression must written without double qutoes and in between //
if you write inside quotes it looks for exact match not splits
*/

// reverse each character in each word of string
function reverseEachcharInEachWordofString(sentance:string):string{
    console.log("Original sentenace : "+sentance);
    let splitData:string[]=sentance.split(" ");
    let reverseString:string="";
    for(let word of splitData)
    {
        reverseString+=word.split("").reverse().join("")+" ";
    }
    return reverseString;

}
console.log("Reverse Each charIn Each Word of String : "+reverseEachcharInEachWordofString("this is my typescript class"));
console.log("-------------------------------------");

//reverse excluding first characters
function reverseExcludingFirstChar(text:string):void{
    let splitdata:string[]=text.split("");
    splitdata.shift(); // removes first element in array
    console.log("After remove First : "+ splitdata.join(" ")); //converst string array into string by joining them with seperator provided
    console.log("reversed string :"+ splitdata.reverse().join(" "));    
}
reverseExcludingFirstChar("ramesh");
console.log("-------------------------------------");
