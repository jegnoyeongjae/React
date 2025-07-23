const ToggleButton = ({ checked, o2 }) => {
  return (
    <div className="ToggleButton">
      <div className="ex2">
        <h2>ToggleButton예제</h2>
        <button onClick={o2}>{checked ? '켜짐' : '꺼짐'}</button>
      </div>
    </div>
  );
};

export default ToggleButton;
