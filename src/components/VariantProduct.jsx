import React, { useState } from "react";
import "@styles/Variant.scss";

const VariantProduct = ({ variant }) => {
  const variantsEntries = Object.entries(variant);
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    console.log(event.target.name);
    setClickedId(id);
  };

  return (
    <div className="variantoption">
      {variantsEntries.map(([key, data]) => {
        return (
          <div className="variantoption__content" key={key}>
            <div className="variantoption__content-title">
              <span>{key}</span>
            </div>

            <div className="variantoption__content-variations">
              {data.map((item, index) => {
                return (
                  <div className="variantoption__content-variations--radionButton" key={`variant-${key}-${index}`}>
                      <input
                        name={key}
                        type="radio"
                        label={item.title}
                        value={item.title}
                        disabled={item.stock === 0 ? true : false}
                      />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VariantProduct;
