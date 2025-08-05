const SelectBox = ({ id, optList, value, handleChangeSelect }) => {
  return (
    <select
      id={id}
      className="SelectBox"
      value={value}
      onChange={handleChangeSelect}
    >
      {optList.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
