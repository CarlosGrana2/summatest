import React, { useState } from "react";
import VariantProduct from "@components/VariantProduct.jsx";
import Rating from "@components/Rating.jsx";
import Button from "@components/Button.jsx";
import Qty from "@components/Qty.jsx";
import "@styles/ProductInfo.scss";

const ProductInfo = ({ products }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div className="productInfo">
        <div className="big-img">
          <img src={products.image} alt={products.title} />
        </div>

        <div className="box-info">
          <div className="row">
            <h2>{products.title}</h2>
            <Rating value={products.rating} />
            <span className="priceBefore">Antes: ${products.priceBefore}</span>
            <span className="price">${products.price}</span>
          </div>

          <VariantProduct variant={products.variants} />
          <Qty />

          <div className="cart">
            <Button name="Añadir al carrito" styles="Addtocart" />
          </div>

          <div className="description">
            <h4>Descripción</h4>
            <p>
              {isReadMore
                ? `${products.content.slice(0, 150)}...`
                : products.content}
              <span onClick={toggleReadMore} className="readmore">
                {isReadMore ? "Leer más" : " Ocultar"}
              </span>
            </p>

            
          </div>

         
        </div>

      </div>
    </>
  );
};

export default ProductInfo;
