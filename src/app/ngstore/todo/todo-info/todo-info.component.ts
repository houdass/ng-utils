import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from '../todo.actions';

import * as fromTodo from '../todo.selectors';
import { TodoState } from '../todo.reducers';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.scss']
})
export class TodoInfoComponent implements OnInit {
  todos$: any;
  updateDate$: any;

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(fromTodo.selectAll);
  }

  deleteAllTodos(): void {
    this.store.dispatch(new TodoActions.DeleteAllTodos());
  }
}
