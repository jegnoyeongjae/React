import { useContext } from 'react';
import { ThemeContext } from './R12Context';

const Button12 = () => {
  const theme = useContext(ThemeContext);
  return <button>현재 테마는 {theme}</button>;
};

export default Button12;
