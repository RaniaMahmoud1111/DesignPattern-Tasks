import { SchoolStudent, UniversityStudent } from "./Students";
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
