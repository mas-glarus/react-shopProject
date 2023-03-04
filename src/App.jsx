import { useState } from "react";
import "./App.css";

const products = [
	{
		id: 1,
		category: "TV",
		name: "Samsung ABC1234",
		details: '4K QLED 54"',
		price: "$799",
		image:
			"https://www.galaxus.ch/im/Files/5/8/9/9/9/3/1/9/221069215_xxl3.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
	},
	{
		id: 2,
		category: "TV",
		name: "Philips 32C47",
		details: 'Full HD 32"',
		price: "$320",
		image:
			"https://www.galaxus.ch/im/Files/4/9/3/1/8/3/1/0/211423749_xxl3.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
	},
	{
		id: 3,
		category: "TV",
		name: "LG 55NANO",
		details: 'LED 55"',
		price: "$470",
		image:
			"https://www.galaxus.ch/im/Files/6/1/5/4/5/3/5/7/222509319_xxl3.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
	},
	{
		id: 4,
		category: "TV",
		name: "Panasonic TX-50LW",
		details: '4K LED 50"',
		price: "$574",
		image:
			"https://www.galaxus.ch/im/Files/7/1/5/2/3/3/4/8/TX-50LXW704_1_KV.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
	},
	{
		id: 5,
		category: "TV",
		name: "Sony KD-55X",
		details: '4K LCD 55"',
		price: "$689",
		image:
			"https://www.galaxus.ch/im/Files/6/5/4/4/3/7/1/9/10_KD-X80K_55-65-75_FRONT_STANDFUSS_POSITION_1.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
	},
];

function ProductCard({ product, setCount, count }) {
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className="product-card">
			<img src={product.image} alt={product.name} />
			<div className="product-card__details">
				<h4 className="product-category">{product.category}</h4>
				<h2 className="product-price">{product.price}</h2>
				<h3 className="product-name">{product.name}</h3>
				<p className="product-details">{product.details}</p>
			</div>
			<button onClick={handleClick}>add to cart</button>
		</div>
	);
}

function App() {
	const [count, setCount] = useState(0);

	const resetCart = () => {
		setCount(count - count);
	};

	return (
		<div className="App">
			<div className="cart">
				<button onClick={resetCart}>Reset Cart</button>
				<h3>in cart: {count}</h3>
			</div>
			<div className="products">
				{products.map((product) => (
					<ProductCard
						product={product}
						setCount={setCount}
						count={count}
						key={product.id}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
