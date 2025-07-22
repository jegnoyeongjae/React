import { useState } from 'react';

const R08 = () => {
  const [list01, setList01] = useState(['item1', 'item2']);
  const [list02, setList02] = useState(['딸', '참', '복', '수', '포']);
  const data3 = ['app', 'bana', 'wmel', 'komel', 'oran'];
  const [keyword3, setKeyword3] = useState('');
  const result3 = data3.filter((item) => item.includes(keyword3));

  const handleAddBtn = () => {
    setList01((prev) => [...prev, `item${prev.length + 1}`]);
  };
  const handleDelBtn1 = () => {
    setList01((prev) => prev.slice(0, -1));
  };

  const handleDelBtn = (index) => {
    setList02((prev) => prev.filter((_, idx) => idx !== index));
    /*
    setList02((prev) => [...prev, prev.pop()]); 이렇게 했더니 오히려 
    마지막값이 pop되어 뽑히고 ...prev에 의해 다시 복사된곳에 추가됨 즉 
    
    딸
    참
    복
    수
    포
    포
    
    가 되어버림
    */
  };

  const handleChangeTextInput3 = (e) => {
    setKeyword3(e.target.value);
  };

  return (
    <div className="R08">
      <h3>R08</h3>
      <div className="ex1">
        <h4>1: 배열에 항목 추가</h4>
        <button onClick={handleAddBtn}>추가</button>
        <button onClick={handleDelBtn1}>제거</button>
        <ul>
          {list01.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ex2">
        <h4>2. 배열에 항목 삭제</h4>

        <ul>
          {list02.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  handleDelBtn(idx);
                }}
              >
                제거
              </button>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="ex3">
        <h3>3. 배열 항목 검색하기</h3>
        <div>
          <input
            type="text"
            value={keyword3}
            onChange={handleChangeTextInput3}
          />
        </div>
        {/* <div>검색결과: {keyword3 && result3.join(',')}</div> */}
        {/* <div>
          검샘결과: {keyword3 ? result3.join(',') : '검색결과가 없습니다.'}
        </div> */}
        <div>
          {keyword3 && (
            <p>
              검색결과:
              {result3.length > 0
                ? result3.join(',')
                : '일치하는 데이터가 없습니다.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default R08;
