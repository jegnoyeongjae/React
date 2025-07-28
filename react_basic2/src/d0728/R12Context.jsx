import { createContext } from 'react';

export const ThemeContext = createContext('light'); // 내가 변수명 강제하는 방법, 'light'는 Provider 영역이 명시되지 않았을 때 사용되는 defaultValue
// export default createContext('light'); 로하면 받는 쪽에서 변수명 정해서 사용가능
