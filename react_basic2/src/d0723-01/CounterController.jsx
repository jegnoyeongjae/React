const CounterController = ({ plus, minus }) => {
  // const plus = () => {
  //   setCount1(countNumber + 1);
  // };
  // const minus = () => {
  //   setCount1(countNumber - 1);
  // };

  return (
    <div className="CounterController">
      <div className="ex1">
        <h2>CounterController</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default CounterController;
