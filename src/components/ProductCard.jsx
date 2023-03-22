import { Link } from "react-router-dom";

function ProductCard({ product, addItem }) {
	return (
		<div className="product-card">
			<Link to={"product/" + product.id}>
				<img src={product.image} alt={product.name} />
				<div className="product-card__details">
					<h4 className="product-category">{product.category}</h4>
					<h2 className="product-price">{product.price}</h2>
					<h3 className="product-name">{product.name}</h3>
					<p className="product-details">{product.details}</p>
				</div>
			</Link>
			<button onClick={() => addItem(product)}>add to cart</button>
		</div>
	);
}

export default ProductCard;
