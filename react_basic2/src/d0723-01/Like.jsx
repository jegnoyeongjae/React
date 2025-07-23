const Like = ({ plusLike, likes }) => {
  return (
    <div className="Like">
      <h2>ex5)Like</h2>
      <div className="ex05">
        {likes.map((star, i) => (
          <div key={i}>
            <p>{star.id}</p>
            <p>{star.like}</p>
            <button onClick={() => plusLike(i)}>좋아요</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
