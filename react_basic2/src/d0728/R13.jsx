import { useReducer } from 'react';

// reducer함수를 정의할 때 매개변수 2개를 설정할 수 있음.
// state는 상태변수의 현재값을 가리키고,
// action은 reducer함수가 호출되는 상황에서 전달되는 데이터를 가리킨다.
// action에 dispatch 함수가 호출 될 때 지정한 인수 값이 저정됨.
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      action.newData;
      return state + 1;
    case 'DECREASE':
      return state == 0 ? (state = 0) : state - 1;
    case 'RESET':
      return 0;
  }
};

const R13 = () => {
  // 상태관리 변수 이름 : count
  // 상태 관리 변수 count의 초기값: 0

  // reducer함수 : 상태 관리의 타입에 따라 어떤 동작이 실행될 것인지를 정의 내리는 함수. 보통 component 외부에서 관리됨.
  const [count, countDispatch] = useReducer(countReducer, 0);

  // countReducer 는 외부에서 관리되는 함수라 호출 불가, 때문에 countDispatch를 이용해서 count값 변경
  // dipatch 함수는 외부에 만들어진 reducer함수를 호출하는 함수.
  // 이때, type으로 reducer함수의 어떤 동작이 실행되어야 할지를 전달.
  // dispatch함수의 호출시 인수를 지정할 때, 인수는 반드시 객체 형태여야 한다.
  // 인수의 객체에 type property를 통해서 reducer함수의 어떤 동작을 실행할지를 전달한다.
  const increaseCount = () => {
    countDispatch({
      type: 'INCREASE',
      newData: 4,
    });
  };
  const decreaseCount = () => {
    countDispatch({ type: 'DECREASE' });
  };
  const resetCount = () => {
    countDispatch({ type: 'RESET' });
  };

  return (
    <div className="R13">
      <h3>R13 - Reducer</h3>
      <p>카운트 : {count}</p>
      <p>
        <button onClick={increaseCount}>증</button>
      </p>
      <p>
        <button onClick={decreaseCount}>감</button>
      </p>
      <p>
        <button onClick={resetCount}>초기화</button>
      </p>
    </div>
  );
};

export default R13;
