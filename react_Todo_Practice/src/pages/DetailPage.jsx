// 리액트의 리듀서를 사용해 컨트롤

import { useParams } from 'react-router-dom';
import { Header } from '../components/commen';
import { useEffect, useState } from 'react';
import { WEATHER_ICONS, WEATHER_LIST } from '../constants/ui';

const DetailPage = ({ Data }) => {
  const [dData, setDdata] = useState({});

  const { id } = useParams();
  const numId = Number(id);

  useEffect(() => {
    findDataFnc();
  }, [id, Data]);

  const findData = Data.find((item) => item.id === numId);
  const findDataFnc = () => {
    setDdata(findData);
  };

  /*
  List_icon에서 find하는 방법 걍 헛짓임
  const weatherIcon = WEATHER_LIST.find(
    (item) => item.value === dData?.weather
  );

  console.log('dData: ', weatherIcon);
  */

  return (
    <div className="DetailPage">
      <Header title={dData?.title} />
      <div className="detail-page-content">
        <div className="top">
          <p className="date">{dData?.date || '날짜 없음'}</p>
          {/* <p className="weather">{weatherIcon?.icon || '날씨 없음'}</p> */}
          <p className="weather">
            {WEATHER_ICONS[dData?.weather] || '날씨 없음'}
          </p>
        </div>
        <div className="content">{dData?.content || '게시글 없음'}</div>
      </div>
      <div className="detail-page-btn">
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </div>
  );
};

export default DetailPage;
