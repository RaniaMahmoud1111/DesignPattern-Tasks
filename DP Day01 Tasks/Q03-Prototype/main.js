import { Document } from "./Document.js";

const doc1=new Document("header1","footer1",4,"Hello");

const doc2=doc1.clone();
doc2.text="Welcome";

console.log(doc1.text);

console.log(doc2.text);