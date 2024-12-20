import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Main.css";
export default function Main() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="header-inner">
            <h2 className="header-title">Our Restaurants</h2>
          </div>
        </div>
      </header>
      <div className="main-container">
        <ul className="restaurant-list">
          {data?.map((restaurant) => (
            <li className="restaurant-card" key={restaurant.id}>
              <img
                className="restaurant-image"
                width={250}
                height={195}
                src={restaurant.imageCarousel?.images[0].url}
                alt={restaurant.imageCarousel?.images[0].alt}
              />
              <h3 className="restaurant-name">{restaurant.restaurant.name}</h3>
              <div className="restaurant-address">
                <p className="address-line1">
                  {restaurant.restaurant.address.line1}
                </p>
                <p className="address-line2">
                  {restaurant.restaurant.address.line2}
                </p>
              </div>
              <p className="restaurant-hours">{restaurant.restaurant.hours}</p>
              <div className="restaurant-details">
                <ul className="time-slots">
                  {restaurant.timeSlots.slice(0, 2).map((el, index) => (
                    <li
                      className={`time-slot ${
                        el.available ? "available-slot" : "unavailable-slot"
                      }`}
                      key={index}
                    >
                      {el.time}
                    </li>
                  ))}
                </ul>
                <Link
                  className="details-link"
                  to={`/restaurant/${restaurant.id}`}
                >
                  More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
