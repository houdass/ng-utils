import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from '../todo.actions';
import * as fromTodo from '../todo.selectors';
import { TodoState } from '../todo.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos$: any;
  isEdit: boolean = false;
  newTodo: string;
  index: number;
  id: number = 2;
  selectedTodo: Todo;

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(fromTodo.selectAll));
  }

  addTodo(): void {
    const todo: Todo = new Todo(this.id++, this.newTodo);
    this.store.dispatch(new TodoActions.AddTodo(todo));
    this.newTodo = '';
  }

  updateTodo(todo: Todo): void {
    this.isEdit = true;
    this.newTodo = todo.name;
    this.selectedTodo = todo;
  }

  confirmTodo(): void {
    this.selectedTodo.name = this.newTodo;
    this.store.dispatch(new TodoActions.UpdateTodo({ id: this.selectedTodo.id, updatedTodo: this.selectedTodo }));
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(todo: Todo): void {
    this.store.dispatch(new TodoActions.DeleteTodo(todo.id));
  }
}
