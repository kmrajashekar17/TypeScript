class A1 {
 a: number = 10;
 b: number = 20;
m1(): void { 
    console.log("M1 Executed");
}
}
class B1 extends A1 {
    x : number = 100;
    y : number = 200
    m2(): void {
        console.log("M2 Executed");
        console.log(this.a + this.b); // accessing parent class properties
    }
}
class C1 extends B1 {
    m3(): void {
        console.log("M3 Executed");
        console.log(this.x + this.y); // class B1
        console.log(this.a + this.b); // class A1
    }
}
let obj3 = new C1();
obj3.m1(); // class A1
obj3.m2(); // class B1
obj3.m3(); // class C1