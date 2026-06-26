class Hello1 {
    m1(): void {
        console.log("M1 Executed");
    }
     m2(): void {
        console.log("M2 Executed");
    }
     m3(): void {
        console.log("M3 Executed");
    }
}
// Creating an instance of the Hello class
let h2 = new Hello1();
// Calling the methods of the Hello class
h2.m1();
h2.m3();
h2.m2();
//----------------------
//Example of Data Types in TypeScript

//1.Primitives Data Types
//    variableName: dataType = value;
const num: number = 10;
console.log(num);
const str: string = "Suresh IT ";
console.log(str);
const bool: boolean = true;
console.log(bool);
let und: undefined = undefined;
console.log(und);
let nul: null = null;
console.log(nul);


//2. Non-Primitive Data Types : array and tuple

//    variableName: dataType = value;
const arrvariable: number[] = [1, 2, 3, 4, 5];
console.log(arrvariable);

if (true) {
    const arrvariable: number[] = [1, 2, 3, 4, 5];
    console.log(arrvariable); // ✅ allowed (different block scope)
}


const tuple: [string, number] = ["Suresh IT", 10];
console.log(tuple);

//3. Any Data Type
//    variableName: any = value;
let anyVar: any = "100";
console.log(anyVar);
anyVar=200;
console.log(anyVar);