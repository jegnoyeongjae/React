import { useState, useEffect } from 'react';

const R14 = () => {
  const [num, setNum] = useState(10);
  const [check, setCheck] = useState(false);
  // useEffect(함수, 의존성 배열)

  // 의존성 배열이 빈 배열일때 : 컴포넌트 랜더링 시 함수를 한번만 호출
  useEffect(() => {}, []);

  // 의존성 배열이 변경될때 함수 호출
  useEffect(() => {
    console.log('R14 num값 변경', num);
  }, [num]);

  // 컴포넌트가 소멸하는 시점(=화면에서 사라지는 시점)에 처리해야할 동작이 있다면 useEffect함수의 return값으로 처리 해줘야 함.

  return (
    <div className="R14">
      <h3>R14</h3>
      <button onClick={() => setNum((prev) => prev + 1)}>{num}</button>
      <button
        onClick={() => {
          setCheck(!check);
        }}
      >
        {String(check)}
      </button>
    </div>
  );
};

export default R14;
