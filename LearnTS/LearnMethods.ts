class LearnMethods
{
    static empid:number=30;
    b:number =20;
    m1() : void
    {
        let a:number =10;
        console.log("M1 Method :"+a);
    }
    m2():void
    {
        console.log("M2 Method");
        console.log(`M2 Method instance variable ${this.b}`);       
    }
    m3():void
    {
        console.log("M3 Method");
        console.log("M1 Method static variable :"+LearnMethods.empid);
    }
}

let h1=new LearnMethods();
h1.m1();
h1.m2();
h1.m3();