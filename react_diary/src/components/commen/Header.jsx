import './Header.css';

const Header = ({
  title,
  btnLeft,
  btnRight,
  handleLeftBtn,
  handleRightBtn,
}) => {
  return (
    <header id="header">
      <h1 className="title">{title}</h1>
      {btnLeft && (
        <p className="btnLeft">
          <button onClick={handleLeftBtn}>
            <span>왼쪽 버튼</span>
          </button>
        </p>
      )}
      {btnRight && (
        <p className="btnRight">
          <button onClick={handleRightBtn}>
            <span>오른쪽 버튼</span>
          </button>
        </p>
      )}
    </header>
  );
};

export default Header;
