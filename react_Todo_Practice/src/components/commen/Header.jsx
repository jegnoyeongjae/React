import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
  const navi = useNavigate();

  const handleClickLeft = () => {
    navi(`/list`);
  };
  const handleClickRight = () => {
    navi(`/list`);
  };

  return (
    <header id="header">
      <h1 className="title">{title}</h1>
      <p className="btnLeft">
        <button onClick={handleClickLeft()}>
          <span>왼쪽 버튼</span>
        </button>
      </p>
      <p className="btnRight">
        <button onClick={handleClickRight()}>
          <span>오른쪽 버튼</span>
        </button>
      </p>
    </header>
  );
};

export default Header;
