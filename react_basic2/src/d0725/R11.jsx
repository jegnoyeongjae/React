import { useRef } from 'react';

const R11 = () => {
  const a1Ref = useRef();
  // console.log(a1Ref); ref객체는 당연히 객체로 들어옴
  // a1Ref.current.style.color = 'red'; 이런식의 선언은 reload시 문서를 읽는 시점 처리 문제에 의해 에러를 발생 시키므로 이벤트로 등록해서 사용해야함

  const handleOpenA1 = () => {
    a1Ref.current.style.display = 'block';
  };
  const handleCloseA1 = () => {
    a1Ref.current.style.display = 'none';
  };

  // ex2 ref가 참조하는 대상에 이벤트 걸기
  const textInputRef = useRef();
  const autoFocusTextInput = () => {
    textInputRef.current.focus();
  };
  return (
    <div className="R11">
      <div>
        <h2>R11 Ref객체 사용해보기</h2>
        <div className="box1">
          <p className="a1" ref={a1Ref}>
            1. A1
          </p>
          <button onClick={handleOpenA1}>열기</button>
          <button onClick={handleCloseA1}>닫기</button>
        </div>
        <div className="box2">
          <h2>ex2</h2>
          <input type="text" ref={textInputRef} />
          <button onClick={autoFocusTextInput}>focuse move</button>
        </div>
      </div>
    </div>
  );
};

export default R11;
