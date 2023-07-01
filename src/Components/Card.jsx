import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import dentistImage from "../Assets/doctor.jpg";

const Card = ({ name, username, id, onRemoveFromFavorites }) => {
  const [buttonText, setButtonText] = useState("Add fav");
  const { state } = useContext(ContextGlobal); // Access the global context directly
  const { theme } = state;

  useEffect(() => {
    const existingFavorites = localStorage.getItem("favorites");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    const isFavorite = favorites.some((item) => item.id === id);

    if (isFavorite) {
      setButtonText("Remove fav");
    }
  }, [id]);

  const handleAddToFavorites = () => {
    if (name) {
      const existingFavorites = localStorage.getItem("favorites");
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      const isFavorite = favorites.some((item) => item.id === id);

      if (isFavorite) {
        const updatedFavorites = favorites.filter((item) => item.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        onRemoveFromFavorites && onRemoveFromFavorites(id);
        setButtonText("Add fav");
      } else {
        favorites.push({ name, username, id });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setButtonText("Remove fav");
      }
    }
  };

  return (
    <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
      <img src={dentistImage} alt="" className="card__image" />
      <h3 className="card__title">{name}</h3>
      <p className="card__username">User: {username}</p>
      <p className="card__id">Id:{id}</p>
      <div className="card__button__area">
        <button
          onClick={handleAddToFavorites}
          className="card__button card__button--fav"
        >
          {buttonText}
        </button>
        <Link to={`/dentist/${id}`} className="card__button card__button--details">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
