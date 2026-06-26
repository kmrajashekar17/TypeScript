interface IMovie{
    selectMovie(movieName:string):void;
}

interface IBooking{
    bookTicket(movieName:string):void;
    cancelTicket(movieName:string):void;
}

interface IPayment{
    makePayment(amount:number):void;
    refund(amount:number):void;
}

class CinemaApp implements IMovie,IBooking,IPayment
{
    //Must implement all abstracted methods of implemented interfaces
    selectMovie(movieName: string): void {
        console.log("Movie Selected : " , movieName);
    }

    bookTicket(movieName: string): void {
        console.log(`Ticket Booked for : ${movieName}`);
    }

    makePayment(amount: number): void {
        console.log("Amount Paid : "+ amount);
    }

    cancelTicket(movieName: string): void {
        console.log("Cancel Ticket for Movie : "+movieName);
    }

    refund(amount: number): void {
        console.log("Refnd Amount : " , amount);
    }

    cinemaInfo():void
    {
        console.log("Cinema App for Booking Movies");
    }

}

const cinemaApp=new CinemaApp();
cinemaApp.selectMovie("KGF");
cinemaApp.bookTicket("KGF");
cinemaApp.makePayment(270);
cinemaApp.cancelTicket("KGF");
cinemaApp.refund(270);

console.log("--------------------------");

interface ILoginStructure
{
    userName:string;
    password:string;
    login():void;
}

//userData is a typed variable reference 
let userData:ILoginStructure={
    userName:"Raju",
    password:"123",
    login() {
        console.log(userData.userName , "Logging In");        
    },
}

console.log(userData.userName);
userData.login();

interface ILogin {
    username: string;
    password: string;
    login(): void;
}

class LoginPage5 implements ILogin {

    username: string = "admin";
    password: string = "123";

    login(): void {
        console.log("Login executed for User : " , this.username);
    }
}

let data5: ILogin = new LoginPage5();

data5.login(); // 


