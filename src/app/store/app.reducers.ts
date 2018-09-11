import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from '../ngstore/todo/todo.reducers';

export interface AppState {
  todo: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodo.todoReducer
};
