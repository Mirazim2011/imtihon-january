import { useLoaderData, Link } from "react-router-dom";
import "./SingleRestaurant.css";

function SingleRestaurant() {
  const restaurant = useLoaderData();
  return (
    <div className="container">
      <Link to="/" className="back-link">
        Go Back
      </Link>
      <div className="restaurant-details">
        <h1 className="restaurant-name">{restaurant.restaurant.name}</h1>
        <img
          src={restaurant.imageCarousel.images[0].url}
          alt="Restaurant"
          className="restaurant-image"
        />
        <p className="restaurant-description">
          {restaurant.restaurant.description}
        </p>
        <div className="restaurant-address">
          <h2 className="address-heading">Addresses</h2>
          <p className="address-line">{restaurant.restaurant.address.line1}</p>
          <p className="address-line">{restaurant.restaurant.address.line2}</p>
        </div>
        <p className="restaurant-hours">{restaurant.restaurant.hours}</p>
        <ul className="time-slots">
          {restaurant.timeSlots.map((el, index) => (
            <li
              key={index}
              className={`${el.available ? "time-slot" : "bg-green"}`}
            >
              {el.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleRestaurant;
