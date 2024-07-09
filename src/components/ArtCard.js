import React from "react";
import "./ArtCard.css";

const ArtCard = ({ artwork }) => {
  return (
    <div className="art-card">
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title}
      />
      <h2>{artwork.title}</h2>
      <p>{artwork.artist_display}</p>
    </div>
  );
};

export default ArtCard;
