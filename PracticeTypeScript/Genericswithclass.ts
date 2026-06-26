console.log("-------------------------------------------------");
class CoolDrinkMachine<T>{
    item :T; //item is a class property
    constructor(item:T)
    {
        this.item=item;
    }
    serve():void{
        console.log("Item : "+this.item);
    }
}

const drinkName=new CoolDrinkMachine<string>("Pepsi");
drinkName.serve();

const drinkPrice=new CoolDrinkMachine<number>(12298);
drinkPrice.serve();

interface CoolDrink
{
    drinkName:string;
    drinkPrice:number;
}

const drinkDetails=new CoolDrinkMachine<CoolDrink>({
    drinkName:"Coco Cola",
    drinkPrice:45
});

const multipleDrinks=new CoolDrinkMachine<CoolDrink[]>( //T will of Type CoolDrink[] array
    [
        {
            drinkName:"drink1",
            drinkPrice:34
        },
        {
            drinkName:"drink2",
            drinkPrice:44
        }
    ]
);

console.log("-------------------------------------------------");
console.log("Drink Name : "+drinkDetails.item.drinkName);
console.log("Drink Price : "+drinkDetails.item.drinkPrice);
console.log("-------------------------------------------------");

//Loop Through drinks
multipleDrinks.item.forEach(coolDrink=>{
    console.log(`Cool Drink Name : ${coolDrink.drinkName} and Drink Price - ${coolDrink.drinkPrice}`);
});

console.log("-------------------------------------------------");