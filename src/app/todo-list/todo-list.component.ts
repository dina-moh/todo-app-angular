// todo-list.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {
  @Input() userId: number | null = null;
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('userId' in changes && this.userId !== null) {
      this.dataService.getTodos(this.userId).subscribe(todos => {
        this.todos = todos;
      });
    }
  }

  deleteTodo(todoId: number): void {
    this.dataService.deleteTodo(todoId).subscribe(() => {
      // Remove the deleted todo from the list
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    });
  }
}
