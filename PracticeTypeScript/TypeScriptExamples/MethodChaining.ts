class A {
    step1() :this {
        console.log("Step 1");
        return this;
    }

    step2() :this {
        console.log("Step 2");
        return this;
    }
}

const objVar=new A();
objVar.step1().step2();

console.log("====================================");

class LoginPage {

    enterUsername() {
        console.log("Enter username");
        return this;
    }

    enterPassword(): LoginPage {
        console.log("Enter password");
        return this;
    }
    enterEmail(){
        console.log("Enter Email");
        return this;
    }

    clickLogin(): this {
        console.log("Click login");
        return this;
    }
    //Note: we can wrtie retun type this or class Name or Dont write still t works
    //As we have returning this inside method Its Understood return type
}
const loginPage=new LoginPage();
loginPage
    .enterUsername()
    .enterPassword()
    .enterEmail()
    .clickLogin();
    //only works each method returns same object 