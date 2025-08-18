// 메뉴 개수대로 배열 요소 생성
const gnbMap = [
    { path : 링크주소, label : 화면에 출력 할 글자 내용 }, 
    { path : 링크주소, label : 화면에 출력 할 글자 내용 },
    { path : 링크주소, label : 화면에 출력 할 글자 내용 }, 
    { path : 링크주소, label : 화면에 출력 할 글자 내용 },
]

// * 화면 출력
// - map매서드의 첫번째 매개변수 gm은 gnbMap배열의 각 요소를 가리키고, 
//   두 번째 매개변수 i는 gnbMap배열의 각 요소의 순서값(인덱스값)을 가리킴. 
// - gnbMap배열의 규모(=사이즈=길이=갯수)만큼 li태그를 반복 생성시킴
// - map 매서드에 의해 반복 출력되는 대상은 반드시 key를 설정해야함. -> 리액트 규칙임.
// - gnbMap배열의 각 요소는 객체 
//   이 객체의 path 프로퍼티에 a태그의 링크값이, label프로퍼티에는 화면에 출력할 글자가 들어 있음. 
// - map 매서드에서 gnbMap배열의 각 요소를 가리키는 것은 gm
//   gm.path, gm.label의 형식으로 명령을 사용해 해당 프로퍼티의 값을 꺼내 사용함.
{
    gnbMap.map((gm, i) => 
        <li key={i}>
            <Link to={gm.path}>
                {gm.label}
            </Link>
        </li>
    )
}

// 패스와 타이틀을 매칭시키기 위해 
const titleMap = [
    { pth : '/', title : '홈'},
    { pth : '/list', title : '할 일 목록'},
    { pth : '/new', title : '새 글 쓰기'},
    { pth : '/detail/:id', title : '상세 페이지'},
    { pth : '/edit/:id', title : '수정 페이지'}
];