import { createContext, useReducer } from 'react';
import { todoReducer } from './todoReducer';

// 초기 데이터 셋팅
const initialTodos = [
  {
    id: 2,
    content: '영단어 외우기',
    createdDate: new Date(2025, 8, 26).getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: '청소하기',
    createdDate: new Date(2025, 7, 25).getTime(),
    isDone: false,
  },
  {
    id: 0,
    content: '서점방문',
    createdDate: new Date(2025, 7, 24).getTime(),
    isDone: false,
  },
];

// 전역 데이터 영역 생성하기
export const TodoContext = createContext();

// 데이터 공급자(Provider)에 전달할 데이터를 가공하는 함수 만들기.
// return 값으로 context의 Provider를 전달함. -> TodoProvider함수를 호출 했을 때 전달 될 값.

// TodoProvider 함수에 자료의 생성, 수정,샂게 를 위한 동작을 모두 만들어 리턴 값의 데이터 공급자를 통해 전달 하도록 작성.
// 이때, 전달할 값을 객체로 묶어서 공급자의 value에 처리함.
export const TodoProvider = ({ children }) => {
  const [todos, todoDispatch] = useReducer(todoReducer, initialTodos);

  const addTodo = (content) => {
    todoDispatch({
      type: 'ADDTODO',
      data: {
        id: new Date().getTime(),
        content,
        createdDate: new Date().getTime(),
        isDone: false,
      },
    });
  };

  const doneTodo = (id) => {
    todoDispatch({
      type: 'DONETODO',
      id,
    });
  };
  const updateTodo = (id, content) => {
    todoDispatch({
      type: 'UPDATETODO',
      id,
      content,
    });
  };
  const removeTodo = (id) => {
    todoDispatch({
      type: 'REMOVETODO',
      id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        doneTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
