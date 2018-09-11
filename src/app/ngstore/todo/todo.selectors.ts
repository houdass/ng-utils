import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducers';

export const { selectAll: selectAllTodos }: any = fromTodo.todoAdapter.getSelectors();
export const getTodoState: any = createFeatureSelector<fromTodo.TodoState>('todo');
// export const updateDate = (state: fromTodo.TodoState) => state.updateDate;
export const selectAll: any = createSelector(getTodoState, selectAllTodos);
// export const getUpdateDate = createSelector(getTodoState, updateDate);
