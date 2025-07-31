const SelectBox = ({ optList, handleChangeSelect, value, id }) => {
  return (
    <select
      id={id}
      className="SelectBox"
      value={value}
      onChange={handleChangeSelect}
    >
      {optList.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {' '}
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
