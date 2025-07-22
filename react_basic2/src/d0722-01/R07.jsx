import { useState } from 'react';
const R07 = () => {
  const [on, setOn] = useState(false);
  const [text2, setText2] = useState('');

  const options3 = ['naver', 'google', 'insta', 'youtube'];
  const [checked3, setChecked3] = useState([]);

  const fruits = ['bana', 'app', 'gra', 'melo', 'pine'];
  const [checked4, setChecked4] = useState('bana');

  let options5 = [
    {
      value: 'ko',
      label: '한',
    },
    {
      value: 'en',
      label: '영',
    },
    {
      value: 'jp',
      label: '일',
    },
  ];
  let [selected5, setSelected5] = useState('ko');

  // 이벤트 관리 함수
  const handleClickBtn01 = () => {
    setOn(!on);
  };

  const handleChangeTextInput2 = (event) => {
    setText2(event.target.value);
  };

  const handleChangeCheckBox3 = (data) => {
    // checked3 배열에 클릭한 데이터의 유무 판단
    // ? 참이면 클린한 데이터 제외하고 배열의 내용을 다시 정비
    //      - array.filter(item => item !== data)
    // : 거짓이라면 기존 배열에 클릭한 데이터 추가
    //      - [...array, data]
    // 상태 변수를 관리하는 set함수의 인수로 함수가 처리될 수 있음,
    setChecked3((prev) => {
      return prev.includes(data)
        ? prev.filter((x) => x !== data)
        : [...prev, data];
    });
  };
  /* 4번예제 라디오버튼
    1. 라디오버튼 옵션값을 관리하는 배열 만들기
    2. 선택된 라디오버튼 옵션값의 상태를 관리할 상태변수 만들기
    3. 라디오버튼의 onChange이벤트에 호출 될 함수를 만들기
      3-1. 이벤트 객체를 활용해 클릭한 이벤트 객체의 값을 저장함. 어디에? 2번에 
  */
  const handleCheckRadio = (e) => {
    setChecked4(e.target.value);
  };

  const handleChangeSelectBox5 = (e) => {
    setSelected5(e.target.value);
  };

  // 6번 예제 폼데이터를 객체로 관리하기
  const [form6, setForm6] = useState({ name: '', email: '' });
  const handleChangeForm6 = (e) => {
    setForm6((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="R07">
      <h3>0722-r07-state</h3>
      <p>
        1.<button onClick={handleClickBtn01}>{on ? 'ON' : 'OFF'}</button>
      </p>
      <p>
        2.
        <input
          type="text"
          placeholder="이름 적어"
          onChange={handleChangeTextInput2}
          id="username2"
          name="username2"
        />
      </p>
      <p className="text2Value">
        2-2
        <br></br>
        입력값: {text2}
      </p>
      <div>
        3.
        {options3.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              id={opt}
              onChange={() => handleChangeCheckBox3(opt)}
              checked={checked3.includes(opt)}
            />
            {opt}
          </label>
        ))}
        <br />
        <p>사용자 선택: {checked3.join(',')}</p>
      </div>
      <div>
        4. 1. map()메서드로 라디오 버튼 반복출력 2. onChange 이벤트로 위의 3번
        함수 호출 3. value 속성값의 위의 2번으로 지정
        {fruits.map((opt) => (
          <label id={opt}>
            <input
              type="radio"
              id={opt}
              name="res"
              value={opt}
              checked={checked4 === opt}
              onChange={handleCheckRadio}
            />
            {opt}
          </label>
        ))}
      </div>
      <br></br>
      <div>
        5. 옵션
        <select
          id="selectedLang5"
          value={selected5}
          onChange={handleChangeSelectBox5}
        >
          {options5.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        사용자가 입력한값: {selected5}
      </div>
      <div>
        6.
        <p>
          이름:
          <input
            type="text"
            placeholder="이름 ㄱ"
            name="name"
            value={form6.name}
            onChange={handleChangeForm6}
          />
        </p>
        <p>
          이메일:
          <input
            type="text"
            placeholder="메일 ㄱ"
            name="email"
            value={form6.email}
            onChange={handleChangeForm6}
          />
        </p>
      </div>
    </div>
  );
};

export default R07;
