import { SchoolStudent, UniversityStudent } from "./Students.js";
export class UniversityFactory {
    static createStudent(name) {
        return new UniversityStudent(name);
    }
}


export class SchoolFactory{
    static createStudent(name){
        return new SchoolStudent(name);
    }
}
