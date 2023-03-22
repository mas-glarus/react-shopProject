import ProductCard from "./ProductCard";

const ProductList = ({ products, count, setCount, addItem }) => {
	return (
		<div className="products-list App">
			{products.map((product) => (
				<ProductCard
					addItem={addItem}
					product={product}
					setCount={setCount}
					count={count}
					key={product.id}
				/>
			))}
		</div>
	);
};

export default ProductList;
