import { SchoolStudent,UniversityStudent } from  "./Students";
export class StudentFactory{
    static createStudent(type,name){
        if(type=="school"){
            return new SchoolStudent(name);
        }

        if(type=="university"){
            return new UniversityStudent(name);
        }
    }
}