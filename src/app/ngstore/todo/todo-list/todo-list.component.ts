import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from '../todo.actions';
import * as fromTodo from '../todo.selectors';
import { TodoState } from '../todo.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
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

  addTodo(newTodo: string): void {
    const todo: Todo = new Todo(this.id++, newTodo);
    this.store.dispatch(new TodoActions.AddTodo(todo));
  }

  updateTodo(todo: Todo): void {
    this.isEdit = true;
    this.newTodo = todo.name;
    this.selectedTodo = todo;
  }

  confirmTodo(newTodoInput: string): void {
    this.selectedTodo.name = newTodoInput;

    this.store.dispatch(new TodoActions.UpdateTodo({ id: this.selectedTodo.id, updatedTodo: this.selectedTodo }));
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(todo: Todo): void {
    this.store.dispatch(new TodoActions.DeleteTodo(todo.id));
  }
}
