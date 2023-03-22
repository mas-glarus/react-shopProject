import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductPage = ({ products, addItem }) => {
	const { id } = useParams();

	const product = products.filter((product) => product.id.toString() === id)[0];
	return (
		<div className="product-page">
			<img src={product.image} />
			<div>
				<h2>{product.name}</h2>
				<p>{product.price}</p>
				<p>{product.details}</p>
				<button onClick={() => addItem(product)}>add to cart</button>
			</div>
		</div>
	);
};

export default ProductPage;
