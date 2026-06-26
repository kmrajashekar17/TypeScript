class AccessModifiersDemo{

    private privateVar:number=20;
    public  publicVar:number=30;
    protected protectedVar:number=50;

    private pmethod():void
    {
        console.log("Am a Private Method ");       
    }

    public pubMethod():void{
        console.log("Am a Public Method");
         console.log("Private Var val "+ this.privateVar);
        console.log("Public var "+ this.publicVar);
        console.log("Protected var "+ this.protectedVar);        
    }
}

class childclass extends AccessModifiersDemo
{
    public childMethod():void
    {
        this.protectedVar=100;
        console.log("Am Child Method");
        console.log("Protected Var in Child class : " + this.protectedVar);
        console.log("public Var in Child class : " + this.publicVar);        
    }
}

let cClass=new childclass();
cClass.pubMethod();
//cClass.pmethod(); only accesible within class 
console.log("============================");
cClass.childMethod();

console.log(cClass.publicVar);
//console.log(cClass.privateVar); //can access within class only
//console.log(cClass.protectedVar); //can access within class and its subclasses only
