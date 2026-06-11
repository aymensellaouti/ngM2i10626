import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger-service";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";
import { TodoApi } from "../model/todo-api.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  http = inject(HttpClient);
  loggerService = inject(LoggerService);
  /**
   * elle retourne la liste des todos
   *
   * @returns Signal<Todo[]>
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  getTodosFromApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(APP_API.todos);
  }

  /**
   * Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns void
   */
  deleteTodo(todo: Todo) {
    this.#todos.update((todos) => todos.filter((actualTodo) => actualTodo != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.log(this.#todos());
  }
}
