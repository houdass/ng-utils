import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as TodoActions from './todo.actions';
import { Todo } from './todo.model';

export interface TodoState extends EntityState<Todo> {
  updateDate: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const defaultTodos: any = {
  ids: [1, 2],
  entities: {
    1: new Todo(1, 'Learn Angular'),
    2: new Todo(1, 'Learn Node.js')
  },
  updateDate: new Date()
};

const initialState: TodoState = todoAdapter.getInitialState(defaultTodos);

export function todoReducer(state: TodoState = initialState, action: TodoActions.TodoActions): any {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      /* return {
        ...state,
        todos: [...state.todos, action.payload],
        updateDate: new Date()
      }; */
      // Object.assign({ ...state, updateDate: new Date() });
      return todoAdapter.addOne(action.payload, { ...state, updateDate: new Date() });
    case TodoActions.UPDATE_TODO:
      /* const todo: Todo = state.todos[action.payload.index];
      const updatedTodo: any = {
        ...todo,
        ...action.payload.updatedTodo
      };
      const todos: Array<Todo> = [...state.todos];
      todos[action.payload.index] = updatedTodo;
      return {
        ...state,
        todos: todos,
        updateDate: new Date()
      };*/

      // Object.assign({ ...state, updateDate: new Date() });
      return todoAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.updatedTodo
        },
        { ...state, updateDate: new Date() }
      );
    case TodoActions.DELETE_TODO:
      /* const oldTodos: Todo[] = [...state.todos];
      oldTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: oldTodos,
        updateDate: new Date()
      }; */
      // Object.assign({ ...state, updateDate: new Date() });
      return todoAdapter.removeOne(action.payload, { ...state, updateDate: new Date() });
    case TodoActions.DELETE_ALL_TODO:
      /* return {
        ...state,
        todos: [],
        updateDate: new Date()
      }; */
      // Object.assign({ ...state, updateDate: new Date() });
      return todoAdapter.removeAll({ ...state, updateDate: new Date() });
    default:
      return state;
  }
}
