// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getTodos(userId: number): Observable<Todo[]> {
    const url = `${this.todosUrl}?userId=${userId}`;
    return this.http.get<Todo[]>(url);
  }

  deleteTodo(todoId: number): Observable<void> {
    const url = `${this.todosUrl}/${todoId}`;
    return this.http.delete<void>(url);
  }
}
