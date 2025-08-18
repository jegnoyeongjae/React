// useLocation : 라우트에서 설정한 path 경로를 가져오는 명령
// matchPath : 경로의 일치 여부를 판단하는 명령
// matchPath(비교 경로, 현재 경로)
import { useLocation, matchPath, Link } from "react-router-dom";

import "./Header.css";

const titleMap = [
    { pth : '/', title : '홈'},
    { pth : '/list', title : '할 일 목록'},
    { pth : '/new', title : '새 글 쓰기'},
    { pth : '/detail/:id', title : '상세 페이지'},
    { pth : '/edit/:id', title : '수정 페이지'}
];

const gnbMap = [
    { path : '/', label : 'Home' },
    { path : '/list', label : 'List' },
    { path : '/new', label : 'New' },
];

const Header = () => {
    // url 패스값을 pathname변수에 저장
    const { pathname } = useLocation();

    // const match = titleMap.find() 
    // titleMap에서 find에서 작성할 조건과 일치하는 대상만 선택해 match변수에 저장함.

    // { pth: tm.path, end: tm.pth === '/'}
    // 동적 경로가 포함된 path에 대한 검사가 이루어져야하기 때문에 matchPath에서 비교대상의 값이 패턴으로 처리되어야함. end옵션값에 따라 true로 인식하는 경우가 달라짐. 

    // path에는 titleMap 각각의 pth의 값을 지정,
    // end는 true/false값을 가져 매칭 방식을 결정함.
    // end값이 true로 반환되면, 현재 패스값(pathname)이 path의 값과 정확하게 일치할 때만 true처리,
    // end값이 false로 반환되면, 현재 패스값(pathname)이 path로 시작한다면 모두 true로 처리함
    const match = titleMap.find(tm => 
        matchPath(
            { path: tm.pth, end: tm.pth === '/'},
            pathname
        )
    );
    
    const title = match ? match.title : '제목입니다.';

    return(
        <header id="Header">
            <h1 className="logo">{title}</h1>
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