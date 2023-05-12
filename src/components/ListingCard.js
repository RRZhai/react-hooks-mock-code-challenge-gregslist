import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {
  const [favorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite(current => !current)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => handleDelete(listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
