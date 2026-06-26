class ConstructorDemo
{
    instanceVar?:number;
    constructor(num:number)
    {
        this.instanceVar=num;
    }
    method1():void{
        console.log("The Value of Instance var is : " ,this.instanceVar);
    }
    
}

let cdemo=new ConstructorDemo(20);
cdemo.method1();

//=================Constructor overloading
class MultipleConstructor
{
    instancevar?:number;
    name?:string;
    isworking?:boolean;

    constructor(num:number);
    constructor(name:string,isworking?:boolean);

    constructor(param1:any,param2?:any){
        if(typeof param1==="number")
        {
            this.instancevar=param1;
        }
        else
        {
            this.name=param1;
            this.isworking=param2;
        }
    }

    show():void{
        console.log(this.instancevar, this.name, this.isworking);
    }
}

console.log("=====MultipleConstructor===========")
let mconstDemo=new MultipleConstructor(20);
mconstDemo.show();

let mconstDemo1=new MultipleConstructor("Raju",true);
mconstDemo1.show();


