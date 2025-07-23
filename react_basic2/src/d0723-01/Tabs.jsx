const Tabs = ({ tabDatas, showTab, on }) => {
  return (
    <div className="Tabs">
      <div className="ex04">
        <h2>ex4) tab 데이터</h2>
        {tabDatas.map((tab, i) => (
          <button
            key={i}
            className={i === on ? 'active' : ''}
            onClick={() => {
              showTab(i);
            }}
          >
            {tab.btn}
          </button>
        ))}
        <p>
          {tabDatas[on].contants}
          {console.log(tabDatas[on].contants)}
        </p>
      </div>
    </div>
  );
};
export default Tabs;
