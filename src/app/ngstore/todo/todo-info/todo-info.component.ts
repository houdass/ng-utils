import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from '../todo.actions';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.scss']
})
export class TodoInfoComponent implements OnInit {
  todos$: any;

  constructor(private store: Store<{ todo: { todos: Todo[] } }>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todo');
  }

  deleteAllTodos(): void {
    this.store.dispatch(new TodoActions.DeleteAllTodos());
  }
}
