export class TeacherDecorator {
    constructor(Teacher, salary, nationality, street) {
        this.Teacher = Teacher;
        this.salary = salary;
        this.nationality = nationality;
        this.street = street;

    }

    display() {
        console.log(this.Teacher.name, this.salary, this.nationality, this.street);
    }
}