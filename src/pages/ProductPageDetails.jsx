import React from 'react';
import ProductDetail from '@containers/ProductDetail.jsx';
import {useLocation} from 'react-router-dom';


const ProductPageDetails = () => {
    const location = useLocation();
    const data = location.state;
   return (
      <>
      <ProductDetail product={data} />
   </>
   );
};

export default ProductPageDetails;