import { Book } from "./Book.js";
import { Box } from "./Box.js";

const box=new Box("Books Box");

const book1=new Book("js guide",200);
const book2=new Book("Design Patterns",330);

box.add(book1);
box.add(book2);

box.show();
