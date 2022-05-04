import React, { useContext, useState } from "react";
import "@styles/ProductItem.scss";
import AppContext from "@context/AppContext";
import ProductDetail from "@containers/ProductDetail.jsx";
import Button from "@components/Button.jsx";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {

  return (
    <div className="ProductItem">
      <img
        src={product.image}
        loading="lazy"
        alt={product.title}
        className="productImage"
      />
      <div className="product-info">
        <div>
          <p className="title">{product.title}</p>
          {product.priceBefore != "" ? (
            <p className="pricebefore">Antes: ${product.priceBefore}</p>
          ) : null}
          <p className="price">${product.price}</p>
        </div>

        <div>
          <Link to="/productdetails" state={product}>
            <Button name="Ver Detalle" styles="primary-button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
