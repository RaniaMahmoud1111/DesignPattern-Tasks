import { Teacher } from "./Teacher.js";
import { TeacherDecorator } from "./TeacherDecorator.js";

const teacher = new Teacher("Ahmed");
teacher.display();

const deco = new TeacherDecorator(teacher, 6000, "Egyptian", "Assuit ");
deco.display();
