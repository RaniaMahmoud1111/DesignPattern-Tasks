import { PizzaBuilder } from "./PizzaBuilder.js";

const pizza=new PizzaBuilder("Large")
.addCheese()
.addPepperoni()
.build();//chaining 

console.log(pizza);