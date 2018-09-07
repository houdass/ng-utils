import * as TodoActions from './todo.actions';
import { Todo } from './todo.model';

const initialState: any = {
  todos: [new Todo('Learn Angular'), new Todo('Learn Webpack')],
  updateDate: new Date()
};

export function todoReducer(state: { todos: Todo[], updateDate: string } = initialState, action: TodoActions.TodoActions): any {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        updateDate: new Date()
      };
    case TodoActions.UPDATE_TODO:
      const todo: Todo = state.todos[action.payload.index];
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
      };
    case TodoActions.DELETE_TODO:
      const oldTodos: Todo[] = [...state.todos];
      oldTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: oldTodos,
        updateDate: new Date()
      };
    case TodoActions.DELETE_ALL_TODO:
      return {
        ...state,
        todos: [],
        updateDate: new Date()
      };
    default:
      return state;
  }
}
