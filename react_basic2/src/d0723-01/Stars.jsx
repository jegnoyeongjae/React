const Stars = ({ likes }) => {
  return (
    <div className="Stars">
      <div className="ex5S">
        <h2>stars</h2>
        {likes.map((star, i) => {
          const totalLikes = star.like;
          const fullStars = Math.floor(totalLikes / 10); // ★ 개수
          const emptyStars = 10 - fullStars; // ☆ 개수

          return (
            <div key={i}>
              {Array(fullStars)
                .fill('★')
                .map((s, idx) => (
                  <span key={`full-${idx}`}>{s}</span>
                ))}
              {Array(emptyStars)
                .fill('☆')
                .map((s, idx) => (
                  <span key={`empty-${idx}`}>{s}</span>
                ))}
              <span style={{ marginLeft: '10px' }}>({totalLikes} 좋아요)</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stars;
