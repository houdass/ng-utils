import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as TodoActions from '../todo.actions';

import * as fromTodo from '../todo.selectors';
import { TodoState } from '../todo.reducers';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html'
})
export class TodoInfoComponent implements OnInit {
  count$: any;
  updateDate$: any;

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(fromTodo.selectTotal));
    this.updateDate$ = this.store.pipe(select(fromTodo.selectUpdateDate));
  }

  deleteAllTodos(): void {
    this.store.dispatch(new TodoActions.DeleteAllTodos());
  }
}
