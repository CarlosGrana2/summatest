import React from 'react';
import ProductItem from '@components/ProductItem.jsx';
import { products } from "../data/dataexample";
import '@styles/ProductList.scss';


const ProductList = () => {
	return (
		<section className="main-container">
            <div className="content">
            <h1>Summa Solutions FED Test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
		<div className="ProductList">
			{products.map(product => (
				<ProductItem
					product={product}
					key={product.id}
				/>
			))}
		</div>
	</section>
	);
}

export default ProductList;