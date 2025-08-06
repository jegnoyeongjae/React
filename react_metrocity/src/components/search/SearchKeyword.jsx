import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './SearchKeyword.css';

const SearchKeyword = ({ handleClickSearchBtn }) => {
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data/recommendKeywords.json');
      const data = response.data.recommendations;
      setKeywords(data.slice(0, 7));
    } catch (e) {
      console.error('검색 키워드 데이터 로딩 실패 : ', e);
    }
  };
  const handleClickKeyword = (keyword) => {
    navigate(`/search?keyword=${keyword}`);
    handleClickSearchBtn();
  };
  return (
    <div className="SearchKeyword">
      <h3>추천 검색어</h3>
      <ul>
        {keywords.map((keyword, idx) => (
          <li
            key={idx}
            onClick={() => {
              handleClickKeyword(keyword);
            }}
          >
            <span className="rank">{idx + 1}.</span>
            <span className="word">{keyword}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchKeyword;
