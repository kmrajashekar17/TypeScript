class Person
{
    private _age!:number; //! tells TS dont complain un initialized i will assign later    

    public get age(){
        return this._age;
    }

    public set age(theAge:number)
    {
        if(theAge<0 || theAge>=200)
        {
            throw new Error('Invalid age')
        }
        else
        {
            this._age=theAge;
        }
    }

}

let obj1=new Person();
obj1.age=40;
console.log(obj1.age);