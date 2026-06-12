import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";
import { TodoService } from "../service/todo.service";
import { TodoApi } from "../model/todo-api.model";
import { httpResource } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
})
export class TodoComponent {
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  todosApi = signal<TodoApi[]>([]);
  todo = signal<Todo>(new Todo());
  todosResources = httpResource<TodoApi[]>(() => `${APP_API.todos}`,{defaultValue: [],},
  );
  constructor() {
    // this.todoService.getTodosFromApi().subscribe({
    //   next: (todosFromApi) => {
    //     this.todosApi.set(todosFromApi);
    //   },
    //   error: (e) => {},
    //   complete: () => {},
    // });
  }

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
