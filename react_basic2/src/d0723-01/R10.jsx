import { useState } from 'react';
import CounterController from './CounterController';
import CounterViewer from './CounterViewer';
import ToggleButton from './ToggleButton';
import Modal from './Modal';
import BootModal from './BootModal';
import Tabs from './Tabs';
import Like from './Like';
import Stars from './Stars';

const R10 = () => {
  /* 
  ex1 + - 버튼을 통해 카운팅하고  그 수를 출력하는 기능을 작성 수는 CounterViewer
  에서 증감은 CounterController 에서 처리 이때 같은 자식 컴포넌트끼린 데이터를
  주고 받을 수 없지만 상위에서 처리하는 작업을 연습

  = react에서 데이터는 어떠한 경우에도 올라갈수없는 one way 방식이지만 데이텨를 변경하거나
  처리하는 '요청' 자체는 올리는 것이 가능하다. 즉 CounterController에서 증감 요청을
  올리고, count1변수의 처리는 R10에서 처리되는 것이다.


  = 반대로 R10에서 증감 함수를 만들어서 증감함수를 내려보내고 btn에 연결해서 요청만 
  올리는것도 가능하다.
  */
  const [count1, setCount1] = useState(1);
  const r1 = count1 % 2 === 0;

  const plus = () => {
    console.log('r1: ', r1, count1);
    if (r1) {
      setCount1(count1 * 2);
      return count1;
    }
    setCount1(count1 + 1);
  };
  const minus = () => {
    if (count1 <= 0) {
      return alert('숫자가 0 미만이 될수 없습니다.');
    }
    setCount1(count1 - 1);
  };

  // ToggleButton 예제
  const [checked, setChecked] = useState(false);
  const o2 = () => {
    setChecked(!checked);
  };

  // ex3 Modal관련 예제
  const [isModal, setIsModal] = useState(false);
  const isModalFnc = () => {
    setIsModal(!isModal);
  };

  // ex04 tabData 버튼에따라 보여주기
  const tabDatas = [
    { btn: '자동차', contants: '자동차내용' },
    { btn: '인테리어', contants: '인테리어 탭의 내용' },
    { btn: '쇼핑', contants: '쇼핑 탭의 내용' },
  ];
  const [on, setOn] = useState(0);
  const showTab = (idx) => {
    console.log(idx);
    setOn(idx);
  };

  // ex05 Like 누를때마다 1증가
  const stars = [
    {
      id: 1,
      like: 0,
    },
    {
      id: 2,
      like: 0,
    },
    {
      id: 3,
      like: 0,
    },
  ];
  const [likes, setLike] = useState(stars);
  const plusLike = (idx) => {
    console.log('like', idx);
    const updateLike = [...likes];
    updateLike[idx].like += 1;
    console.log('updateLike: ', updateLike);
    setLike(updateLike);
  };

  return (
    <div className="R10">
      <div className="ex1">
        <h2>hi</h2>
        <CounterViewer countNumber={count1} />
        {/* 
          <CounterController setCount1={setCount1} countNumber={count1} /> 
          해당 방법을 사용하면 depth가 많이 빠질 경우 하위에서 문제가 생길 가능성 다분
          해당 방법을 지양하도록 경고 하고있기 때문에 직접 set함수를 보내지 않기를 권장.
        */}
        <CounterController plus={plus} minus={minus} />

        <ToggleButton checked={checked} o2={o2} />
        <h2>ex3) 모달창 관리</h2>
        <button onClick={isModalFnc}>모달창열기</button>
        {isModal && <Modal isModalFnc={isModalFnc} />}
        {/* <Modal showModal={showModal} /> */}
        <BootModal />
        <Tabs tabDatas={tabDatas} showTab={showTab} on={on} />
        <Like plusLike={plusLike} likes={likes} />
        <Stars likes={likes} />
      </div>
    </div>
  );
};

export default R10;
