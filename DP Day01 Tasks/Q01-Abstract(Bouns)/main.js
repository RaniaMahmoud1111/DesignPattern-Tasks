import { SchoolFactory,UniversityFactory } from "./StudentFactory.js";

const s1=SchoolFactory.createStudent( "Ahmed");
const s2=UniversityFactory.createStudent( "Rania");

console.log(s1);
console.log(s2);


