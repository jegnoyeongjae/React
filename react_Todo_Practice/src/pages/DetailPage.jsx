// 리액트의 리듀서를 사용해 컨트롤

import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WEATHER_ICONS, WEATHER_LIST } from '../constants/ui';

const DetailPage = ({ Data }) => {
  /* 
    state함수를 사용하다 gpt에서 findData를 직접 사용하란 충고를 들음 이미 완성된
    data가 있는데 굳이 또 state함수를 사용할 필요도 없거니와 추가 관리(state함수사용)
    과정에서 데이터가 들어오는 시점에 관한 문제(undefined)가 생길 수 도 있어서 직접 
    findData를 사용하길 권장받음
    const [dData, setDdata] = useState({});
   */
  const { setHeaderProps } = useOutletContext();

  const { id } = useParams();
  const numId = Number(id);

  const findData = Data.find((item) => item.id === numId);

  useEffect(() => {
    // setDdata(findData);
    console.log('유즈이펙트: ', findData?.title);
    setHeaderProps({
      title: findData?.title,
    });
  }, [id, Data]);

  /*
  List_icon에서 find하는 방법 걍 헛짓임
  const weatherIcon = WEATHER_LIST.find(
    (item) => item.value === dData?.weather
  );

  console.log('dData: ', weatherIcon);
  */

  return (
    <div className="DetailPage">
      {/* <Header title={dData?.title} /> */}
      <div className="detail-page-content">
        <div className="top">
          <p className="date">{findData?.date || '날짜 없음'}</p>
          {/* <p className="weather">{weatherIcon?.icon || '날씨 없음'}</p> */}
          <p className="weather">
            {WEATHER_ICONS[findData?.weather] || '날씨 없음'}
          </p>
        </div>
        <div className="content">{findData?.content || '게시글 없음'}</div>
      </div>
      <div className="detail-page-btn">
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </div>
  );
};

export default DetailPage;
