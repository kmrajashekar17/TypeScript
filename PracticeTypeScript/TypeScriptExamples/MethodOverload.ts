class MethodOverloadng
{

    adddition(num1:number):number;
    adddition(num1:number,num2:number):number;
    
    adddition(num1:number,num2:number=0):number{
       return num1+num2;
    }
}

const obj=new MethodOverloadng();
console.log(obj.adddition(10));
console.log(obj.adddition(10,20));

console.log("====================================");
class Calculator {

    add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: any, b: any): any {
        return a + b;
    }
}

const obj1 = new Calculator();

console.log(obj1.add(10, 20));        // number
console.log(obj1.add("Hello ", "TS")); // string

console.log("====================================");
class Logger {

    log(message: string): void;
    log(message: string, type: "info" | "error"): void;

    log(message: string, type: any = "info"): void {
        console.log(`[${type}] ${message}`);
    }
}

const logger = new Logger();

logger.log("Test started");
logger.log("Login failed", "error");
console.log("====================================");
class DataHandler {

    process(data: string): void;
    process(data: number[]): void;

    process(data: any): void {
        if (typeof data === "string") {
            console.log("String:", data);
        } else {
            console.log("Array:", data);
        }
    }
}

const obj4 = new DataHandler();

obj4.process("Hello");
obj4.process([1, 2, 3]);