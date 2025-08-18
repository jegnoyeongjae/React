// useLocation : 라우트에서 설정한 path 경로를 가져오는 명령
// matchPath : 경로의 일치 여부를 판단하는 명령
// matchPath(비교 경로, 현재 경로)
import { useLocation, matchPath, Link } from "react-router-dom";

import "./Header.css";


const gnbMap = [
    { path: '/', label: 'Home' },
    { path: '/list', label: 'List' },
    { path: '/new', label: 'New' },
];

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header id="Header">
            <h1 className="logo">title</h1>
            <nav className="gnb">
                <ul>
                    {gnbMap.map((gm, idx) =>
                        <li
                            key={idx}
                            className={gm.path === pathname ? 'active' : ''}
                        >
                            <Link to={gm.path}>{gm.label}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;