interface Flights{
    flightNumber:number;
    flightName:string;
}

interface Books{
    title:string;
    author:string;
}

interface ProductBooking<T>{
    data :T;
    status:string;
    message:string;
}

let purchaseBook:ProductBooking<Books>={
    data:{
        title:"Titanic",
        author:"abcd"
        },
    status:"avaialble",    
    message:"5 strar rated"
};

let bookFlight:ProductBooking<Flights>={
    data:{
        flightName:"Indigo",
        flightNumber:12345
    },
    status:"Not Avaialble",
    message:"Cheap Flight"
}

let bookFlights:ProductBooking<Flights[]>={
    data:[ //for multiple data provide in square brackets
    {
      flightName:"Qatar Airways",  
      flightNumber:123
    },
    {
        flightName:"Air India",
        flightNumber:234
    }   
    ],
    status:"Avaialble",
    message:"Economy"
}

console.log("-------------------------------------------------");
console.log(`Book Name   : ${purchaseBook.data.title}    and status : ${purchaseBook.status}`);
console.log("-------------------------------------------------");
console.log(`Flight Name : ${bookFlight.data.flightName} and status : ${bookFlight.status}`);
console.log("-------------------------------------------------");

//Loop throgh all flights
bookFlights.data.forEach(flight=>{
    console.log("Flight Name : "+flight.flightName +" And Flight Number : "+flight.flightNumber +" Status : "+bookFlights.status);
});

console.log("-------------------------------------------------");




