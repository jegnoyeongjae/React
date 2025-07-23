const Modal = ({ isModalFnc }) => {
  return (
    <div>
      <h2>modal 예제</h2>
      <button onClick={isModalFnc}>모달창 닫기</button>
    </div>
  );
};

export default Modal;
