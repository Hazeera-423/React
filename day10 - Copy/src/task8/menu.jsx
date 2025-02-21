import React from "react";

const ContextMenu2 = ({ x, y, movie }) => {
  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      <ul>
        <li>View {movie.title}</li>
        <li>Add to Watchlist</li>
        <li>Share</li>
      </ul>
    </div>
  );
};

export default ContextMenu2;
