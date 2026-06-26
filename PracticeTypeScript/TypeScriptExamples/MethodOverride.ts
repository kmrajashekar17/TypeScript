class overRide {
    add(a: number, b: number): void  {
        console.log(a + b);
        console.log("Existing functionality - Old Car");
    }
}
class overRide1 extends overRide {
    add(a: number, b: number): void  {
        super.add(a,b);  //calling parent add method
        console.log(a - b);
        console.log("New functionality - New Car"); 
              
    }
}
let obj9 = new overRide1(); 
obj9.add(10, 20); //hides parent method add executes child method Its abstraction