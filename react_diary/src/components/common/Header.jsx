import './Header.css';
const Header = ({
  title,
  btnLeft,
  btnRight,
  handleLeftBtn,
  handleRightBtn,
}) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      {btnLeft && (
        <p className="btnLeft">
          <button onClick={handleLeftBtn}>
            <span>left btn</span>
          </button>
        </p>
      )}
      {btnRight && (
        <p className="btnRight">
          <button onClick={handleRightBtn}>
            <span>right btn</span>
          </button>
        </p>
      )}
    </div>
  );
};

export default Header;
