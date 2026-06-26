let a1 : number = 10;
let b1 : number = 20;
let choice : number = 4;
switch(choice) {
    case 1 : console.log("Addition is " + (a1+b1));
             break;
    case 2 : console.log("Subtraction is " + (a1-b1));
             break;
    case 3 : console.log("Multiplication is " + (a1*b1));
             break;
    case 4 : console.log("Division is " + (a1/b1));
             break;
    default : console.log("Invalid choice");
}

let role: string = "admin";

switch (role) {
    case "admin":
        console.log("Admin access");
        break;
    case "user":
        console.log("User access");
        break;
        default : console.log("Invalid choice");
}

