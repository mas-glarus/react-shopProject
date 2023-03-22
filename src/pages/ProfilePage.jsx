import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
	const imgUrl =
		"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

	const { userId } = useParams();

	return (
		<div className="product-page">
			<img className="" src={imgUrl} />
			<div>profile page for user with Id : {userId}</div>
		</div>
	);
};

export default ProfilePage;
