import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducers';

export const { selectAll: selectAllTodos, selectTotal: count }: any = fromTodo.todoAdapter.getSelectors();
export const getTodoState: any = createFeatureSelector<fromTodo.TodoState>('todo');
export const selectAll: any = createSelector(getTodoState, selectAllTodos);
export const selectTotal: any = createSelector(getTodoState, count);
export const selectUpdateDate: any = createSelector(getTodoState, (state: fromTodo.TodoState) => state.updateDate);
