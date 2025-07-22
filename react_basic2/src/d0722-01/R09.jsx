import { useState } from 'react';

const R09 = () => {
  const [ex01, setEx1] = useState([
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
  ]);

  const btnAdd = () => {
    setEx1();
  };

  const btnDel = () => {
    setEx1();
  };

  return (
    <div className="R09">
      <h1>R09입니다.</h1>
      <div className="ex1">
        <h3>1. 배열에 항목추가/제거</h3>
        <button className="add" onClick={btnAdd}>
          add
        </button>
        <button className="del" onClick={btnDel}>
          del
        </button>
        <ul>
          {ex01.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ex2">
        <h3>2. 원하는 항목제거</h3>
      </div>
      <div className="ex3">
        <h3>3. 배열의 항목 검색</h3>
      </div>
    </div>
  );
};

export default R09;
