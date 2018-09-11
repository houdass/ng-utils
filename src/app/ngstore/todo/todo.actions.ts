import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODO = 'DELETE_ALL_TODO';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: { id: number; updatedTodo: Todo }) {}
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) {}
}

export class DeleteAllTodos implements Action {
  readonly type = DELETE_ALL_TODO;
}

export type TodoActions = AddTodo | UpdateTodo | DeleteTodo | DeleteAllTodos;
