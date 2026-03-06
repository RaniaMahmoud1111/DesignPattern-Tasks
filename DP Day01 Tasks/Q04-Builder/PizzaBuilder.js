export class PizzaBuilder{
    constructor(size){
        this.size=size;
        this.cheese=false;
        this.pepperoni=false;
    }
    addCheese(){
        this.cheese=true;
        return this ;
    }
    addPepperoni(){
        this.pepperoni=true;
        return this;
    }

    build(){
        return {
            size:this.size,
            cheese:this.cheese,
            pepperoni:this.pepperoni
        };
    }
}