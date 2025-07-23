const CounterViewer = ({ countNumber }) => {
  return (
    <div className="CounterViewer">
      <div className="ex1">
        <h2>CounterViewer</h2>
        {countNumber}
      </div>
    </div>
  );
};

export default CounterViewer;
