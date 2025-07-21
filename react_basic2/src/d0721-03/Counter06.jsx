import { useState } from 'react';

const Counter06 = () => {
  // const [상태변수 이름, 상태변수를 변화시키는 함수 ] = userState(상태변수의 초기값);
  const [count, setCount] = useState(100);

  const handleClickPulus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    // <div>
    //   <h2>Counter06</h2>
    //   <p>{count}</p>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     +
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCount(count - 1);
    //     }}
    //   >
    //     -
    //   </button>
    // </div>
    <div>
      <h2>Counter06</h2>
      <p>{count}</p>
      <button onClick={handleClickPulus}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};

export default Counter06;
