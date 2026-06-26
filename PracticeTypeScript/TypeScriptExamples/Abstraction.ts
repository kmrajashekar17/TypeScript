abstract class Bank
{
    //alllow access modifiers , static methods , Non static methods
    private banBalance:number=200000;
    static intitializeBank():void{
        console.log("Initializing Bank Class : ");
    }
    showBankBalance():void
    {
        console.log("Bank Balance: "+ this.banBalance);
    }

    abstract credit():void;
    abstract debit():void;    
}

class HDFC extends Bank{
    credit():void{
        console.log("Credit HDFC");
    }
    debit():void{
        console.log("Debit HDFC");
    }
    public HDFCInfo():void{
        console.log("HDFC related Info")
    }

}

class SBI extends Bank{
    credit():void{
        console.log("Credit SBI");
    }
    debit():void{
        console.log("Debit SBI");
    }
    public SBIInfo():void{
        console.log("SBI related Info")
    }
}

Bank.intitializeBank();
console.log("-----------------------")
let hdfc=new HDFC();
hdfc.showBankBalance();
hdfc.credit();
hdfc.debit();
hdfc.HDFCInfo();
console.log("-----------------------")
let sbi=new SBI();
sbi.credit();
sbi.debit();
sbi.SBIInfo();