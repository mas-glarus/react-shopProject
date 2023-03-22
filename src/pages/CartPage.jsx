import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeItem }) => {
	return (
		<div className="cart-container">
			{cartItems.length < 1 ? (
				<div>
					you've got nothing on your cart go fill it <Link to="/">here</Link>
				</div>
			) : (
				cartItems.map((cartItem) => (
					<div className="cart-item">
						<img
							className="cart-img"
							src={cartItem.imageSrc}
							alt={cartItem.desc}
						/>
						<div className="cart-item-info">
							<h3>{cartItem.name}</h3>
							<h3>{cartItem.price}</h3>
							<p>{cartItem.desc}</p>
							<button onClick={() => removeItem(cartItem.id)}>remove</button>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default CartPage;
