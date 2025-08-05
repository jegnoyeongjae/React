import { Link } from 'react-router-dom';
import { SearchModal } from '../search';
import { useRef, useState } from 'react';
import Gnb from './Gnb';

import './Header.css';

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const handleClickSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <header id="Header">
      <Gnb />
      <div className="utills">
        <ul>
          <li>
            <Link to="">LOGIN</Link>
          </li>
          <li>
            <Link to="">JOIN</Link>
          </li>
          <li>
            <Link to="">CART(0)</Link>
          </li>
          <li>
            <Link to="">KO</Link>
          </li>
          <li className="open-search">
            <button onClick={handleClickSearch}>
              {isOpenSearch ? (
                <img src="/images/x-button.png" alt="닫기" />
              ) : (
                <img src="/images/icon_search.png" alt="검색창 열기" />
              )}
            </button>
          </li>
        </ul>
      </div>
      {isOpenSearch && <SearchModal />}
    </header>
  );
};

export default Header;
