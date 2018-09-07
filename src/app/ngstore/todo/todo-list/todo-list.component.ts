import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from '../todo.actions';

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

  constructor(private store: Store<{ todo: { todos: Todo[], updateDate: string } }>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todo');
  }

  addTodo(newTodo: string): void {
    const todo: Todo = new Todo(newTodo);
    this.store.dispatch(new TodoActions.AddTodo(todo));
  }

  updateTodo(index: number, name: string): void {
    this.isEdit = true;
    this.newTodo = name;
    this.index = index;
  }

  confirmTodo(newTodoInput: string): void {
    const updatedTodo: Todo = new Todo(newTodoInput);
    this.store.dispatch(new TodoActions.UpdateTodo({ index: this.index, updatedTodo }));
    this.isEdit = false;
    this.newTodo = '';
  }

  deleteTodo(index: number): void {
    this.store.dispatch(new TodoActions.DeleteTodo(index));
  }
}
