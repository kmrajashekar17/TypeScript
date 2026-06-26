interface ILoginPage {
    enterUsername(name: string): void;
    enterPassword(pass: string): void;
    clickLogin(): void;
}

abstract class BasePage {

    openUrl(url: string): void {
        console.log("Opening URL:", url);
    }

    abstract validateTitle(): void;
}

class LoginPage1 extends BasePage implements ILoginPage {

    enterUsername(name: string): void {
        console.log("Enter username:", name);
    }

    enterPassword(pass: string): void {
        console.log("Enter password:", pass);
    }

    clickLogin(): void {
        console.log("Click login");
    }

    validateTitle(): void {
        console.log("Validating title");
    }
}

const loginPage1=new LoginPage1();
loginPage1.openUrl("https://testing.com");
loginPage1.enterUsername("Raju");
loginPage1.enterPassword("123");
loginPage1.clickLogin();
loginPage1.validateTitle();