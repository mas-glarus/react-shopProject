import Cart from "../components/Cart";
import { Link, NavLink, Outlet } from "react-router-dom";

const RootLayout = ({ totalItems }) => {
	return (
		<div className="app">
			<nav className="navbar">
				<Link to="/">
					<h1 className="logo">marc's random shop</h1>
				</Link>

				<div className="links">
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About Us</NavLink>
					<NavLink to="cart">
						<Cart totalItems={totalItems} />
					</NavLink>
				</div>
			</nav>

			<Outlet />
		</div>
	);
};

export default RootLayout;
