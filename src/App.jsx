import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import ProductList from "./components/ProductList";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([
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
	]);
	const [cartItems, setCartItems] = useState([]);

	const addItem = (product) => {
		setCartItems([...cartItems, product]);
	};
	const removeItem = (id) => {
		setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout totalItems={cartItems.length} />}>
				<Route
					index
					element={
						<ProductList
							addItem={addItem}
							products={products}
							count={count}
							setCount={setCount}
						/>
					}
				/>
				<Route path="about" element={<About />} />
				<Route
					path="cart"
					element={<CartPage cartItems={cartItems} removeItem={removeItem} />}
				/>
				<Route
					path="product/:id/"
					element={<ProductPage products={products} addItem={addItem} />}
				/>
				<Route path="profile/:userId/" element={<ProfilePage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
