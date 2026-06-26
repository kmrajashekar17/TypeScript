//-- String Functions in TypeScript

// 1. String Length
let str3: string = "Suresh IT Academy!";
console.log("Length of the string:", str3.length);

// 2. String Concatenation
let str1: string = "Hello, ";
let str2: string = "World!";
let result: string = str1 + str2;
console.log("Concatenated String:", result);

// 3. String Interpolation
let name1: string = "Suresh";
let greeting: string = `Hello, ${name1}! Welcome to TypeScript.`;
console.log(greeting);
// 4. String Methods
let sampleStr: string = "TypeScript is great!";
console.log("Uppercase:", sampleStr.toUpperCase());
console.log("Lowercase:", sampleStr.toLowerCase());
console.log("Includes 'great':", sampleStr.includes("great"));
console.log("Starts with 'Type':", sampleStr.startsWith("Type"));
console.log("Ends with 'great!':", sampleStr.endsWith("great!"));
