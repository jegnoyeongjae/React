import { useState } from "react";
import { Link } from "react-router-dom";

import Gnb from "./Gnb";
import { SearchModal } from "../search";

import './Header.css';

const Header = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const handleClickSearchBtn = () => {
        setIsOpenSearch(!isOpenSearch);
    }

    return (
        <header id="Header">
            <Gnb />
            <div className="utills">
                <ul>
                    <li><Link to=''>LOGIN</Link></li>
                    <li><Link to=''>JOIN</Link></li>
                    <li><Link to=''>CART(0)</Link></li>
                    <li><Link to=''>KO</Link></li>
                    <li className="open-search">
                        <button onClick={handleClickSearchBtn}>
                            {
                                isOpenSearch
                                    ? <img src="/images/icon_close.png" alt="검색창 닫기" />
                                    : <img src="/images/icon_search.png" alt="검색창 열기" />
                            }
                        </button>
                    </li>
                </ul>
            </div>
            {isOpenSearch && <SearchModal handleClickSearchBtn={handleClickSearchBtn} />}
        </header>
    )
}

export default Header;