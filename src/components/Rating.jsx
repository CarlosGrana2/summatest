import React, {useState} from "react";
import "@styles/Rating.scss";

const Rating = (stars) => {
    const [rating, setRating] = useState(stars.value);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
                        <div className="star-value">

        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          
          );
        })}
    </div>
    <span className="text-rating">{rating} de 5</span>
      </div>
    );
};

export default Rating;
