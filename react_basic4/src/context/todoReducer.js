export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADDTODO':
      return [action.data, ...state];
    case 'DONETODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'UPDATETODO':
      return state.map((todo) => {
        todo.id === action.id ? { ...todo, content: action.content } : todo;
      });
    case 'REMOVETODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
