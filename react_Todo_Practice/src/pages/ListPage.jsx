import { Header } from '../components/commen';

import './ListPage.css';

const SORT_OPTION_LIST = [
  { value: 'latest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const FILTER_OPTION_LIST = [
  { value: 'all', name: '전체' },
  { value: 'sunny', name: '맑음' },
  { value: 'cloudy', name: '흐림' },
  { value: 'rainny', name: '비' },
];
const nowMonth = new Date().toLocaleDateString('Ko-kr');

const ListPage = ({ Data }) => {
  return (
    <div className="ListPage">
      <Header title={nowMonth} />
      <div className="list-top">
        <div className="total">총 {Data.length}개</div>
        <div className="select-wrap">
          {Data.map((data, idx) => (
            <span key={idx}> {data.title}</span>
          ))}
        </div>
      </div>
      <div className="btn-go-create">
        링크 태그 이용해서 새글
        <br />
        쓰기
      </div>
    </div>
  );
};

export default ListPage;
