import axios from 'axios';
import { useEffect, useState } from 'react';
import './SearchKeyword.css';
import { Link } from 'react-router-dom';

const SearchKeyword = () => {
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    const loading = async () => {
      try {
        const res = await axios.get('/data/recommendKeywords.json');

        const resSlice = res.data.recommendations.slice(0, 7);

        setKeyword(resSlice);
      } catch (error) {
        console.log('에러입니다. ', error);
      }
    };
    loading();
  }, []);

  console.log(keyword);
  return (
    <div className="SearchKeyword">
      {keyword ? (
        <div className="keyword">
          {keyword.map((item, idx) => (
            <div key={idx}>
              <Link to={''}>
                <span>
                  {idx + 1}. {item}{' '}
                </span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>추천 없음</div>
      )}
    </div>
  );
};

export default SearchKeyword;
