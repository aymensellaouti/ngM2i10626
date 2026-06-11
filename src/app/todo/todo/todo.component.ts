import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule]
})
export class TodoComponent {
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();

  todo = signal<Todo>(new Todo())
  constructor() {}

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
