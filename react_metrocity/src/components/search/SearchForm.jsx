import { useState } from 'react';

import './SearchForm.css';

const SearchForm = ({ handleClickSearchBtn }) => {
  const [inputText, setinputText] = useState('');

  const handleChangeText = (e) => {
    setinputText(e.target.value);
  };
  const handleClickSearch = () => {
    if (!inputText.trim()) {
      alert('검색어를 입력해주세요');
      return;
    }
    navigate(`/search?keyword=${inputText}`);
    handleClickSearchBtn();
    setinputText('');
  };

  return (
    <div className="SearchForm">
      <input
        type="text"
        placeholder="검색어를 입력해 주세요"
        onChange={handleChangeText}
      />
      <button onClick={handleClickSearch}>
        <img src="./images/icon_search.png" alt="검색 실행하기" />
      </button>
    </div>
  );
};

export default SearchForm;
