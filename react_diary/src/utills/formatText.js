export const formatTextWithBr = (text) => {
  return (text ?? '').split('\n');
};

// * null 병합 연산자
// text ?? ''
// text변수의 값이 null도 아니고, undefined도 아니면 text변수값을 사용
// 그 외에는 빈 문자열('')을 사용함.
