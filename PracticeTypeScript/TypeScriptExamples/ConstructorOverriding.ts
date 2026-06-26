class Parent {
    constructor(name: string) {
        console.log("Parent:", name);
    }
}

class Child extends Parent {
    constructor(name: string) {
        super(name); // MUST call parent constructor first
        console.log("Child:", name);        
    }
}

const child=new Child("Raju");
