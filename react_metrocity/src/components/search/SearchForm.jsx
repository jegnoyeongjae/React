import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './SearchForm.css';

const SearchForm = ({handleClickSearchBtn}) => {
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleChangeText = e => setText(e.target.value);

    const handleClickSearch = () => {
        if(!text.trim()){
            alert('검색어를 입력해주세요.');
            return;
        }
        
        navigate(`/search?keyword=${text}`);
        handleClickSearchBtn();
        setText('');
    }

    return(
        <div className="SearchForm">
            <input 
                type="text" 
                placeholder="검색어를 입력해주세요." 
                value={text}
                onChange={handleChangeText}
            />
            <button onClick={handleClickSearch}>
                <img src="/images/icon_search.png" alt="검색 실행하기" />
            </button>
        </div>
    )
}

export default SearchForm;