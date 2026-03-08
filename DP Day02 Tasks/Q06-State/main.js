import { Todo } from "./Todo.js";
import {Done,ReadyForReview,InProgress} from "./States.js"

const todo=new Todo(new InProgress());
todo.request();

todo.setState(new ReadyForReview());
todo.request();

todo.setState(new Done());
todo.request();
