import React, { useState } from "react";
import "@styles/Qty.scss";

const Qty = () => {
  const [qty, setQty] = useState(1);

  const increment = (prevqty) => {
    setQty(++prevqty);
  };

  const decrement = (prevqty) => {
    setQty(--prevqty > 0 ? prevqty : 1);
  };

  return (
    <div className="quantity">
      <span>Cantidad</span>
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={() => decrement(qty)}
        >
-        </button>
        <input
          className="quantity-input__screen"
          type="text"
          value={qty}
          readOnly
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={() => increment(qty)}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  );
};

export default Qty;
