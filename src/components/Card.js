import React from "react";
import "./style.css";
const myCategories = [
  {
    name: "Restaurants",
    description: "Popular spots to eat & drink",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/75/3f/d1/restaurant-in-valkenswaard.jpg",
  },
  {
    name: "Adventures",
    description: "My description",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-p/17/75/3a/98/kleine-culinaire-bites.jpg",
  },
  {
    name: "Stays",
    description: "My description",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-p/17/75/3a/98/kleine-culinaire-bites.jpg",
  },
  {
    name: "Experiences",
    description: "My description",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-p/17/75/3a/98/kleine-culinaire-bites.jpg",
  },
];

export default function Card() {
  return (
    <div className="row">
      {myCategories.map((el) => {
        return (
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-5">
                <img src={el.img} alt={el.name} className="responsiveImg" />
              </div>
              <div className="col-md-7">
                <h3>{el.name}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
