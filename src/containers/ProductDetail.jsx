import React from 'react';
import ProductInfo from '@components/ProductInfo.jsx';
import '@styles/ProductDetail.scss';


const ProductDetail = ({product}) => {
	return (
		<aside className="productDetail">
			<ProductInfo products={product}/>
		</aside>
	);
}

export default ProductDetail;
