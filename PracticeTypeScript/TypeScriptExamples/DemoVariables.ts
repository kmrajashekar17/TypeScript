class DemoVariables
{
    instancevar:number=20;//instance variable
    static staticVar:string="Static Variable"; // static variable

    //Non Static methods
    method1():void
    {
        console.log("Instance Variable using 'this' Keyword: "+this.instancevar);
        console.log("Static variable Inside Non Static Method: "+ DemoVariables.staticVar);
    }
    method2():void{
        const localvaribale:boolean=true;//local variable
        console.log("Am a Local variable  : "+localvaribale); //access directly
    }
    method3():void{
        console.log("Am an instance method called from another instance method");
    }
    method4():void{
        console.log("Calling instance method in another method : ");
        this.method3();
    }

    //Static method
    static staticMethod():void
    {
        console.log("Am a static method");  
        //console.log("Static method cannot access Instance variable : "+  this.instancevar);  
        //Property 'instancevar' does not exist on type 'typeof DemoVariables' 
        console.log("Static variable Inside Static Method: "+ DemoVariables.staticVar);   
    }

    

}

let d=new DemoVariables();
d.method1();
d.method2();
d.method4();
DemoVariables.staticMethod();
console.log("Static Variable Outside class : "+ DemoVariables.staticVar);
