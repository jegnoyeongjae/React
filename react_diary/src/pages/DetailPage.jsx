import { useParams } from 'react-router-dom';
import { Header } from '../components/common';
import { useEffect, useState } from 'react';

const DetailPage = ({ diary }) => {
  const { id } = useParams();
  const [diaryD, setDiaryD] = useState();

  useEffect(() => {
    if (diary && diary.length > 0) {
      const sd = diary.find((dataD) => dataD.id == id);
      setDiaryD(sd);
    }
  }, [diary, id]);

  // 로딩 또는 데이터 없음 처리
  if (!diaryD) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="DetailPage">
      <Header title={'상세 페이지'} btnLeft={'이전 페이지로 이동'} />
      <h3>DetailPage</h3>
      <div>{diaryD.title}</div>
      <div>{diaryD.content}</div>
    </div>
  );
};

export default DetailPage;
