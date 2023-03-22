import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h1>About page</h1> <Link to="/">back to home page</Link>{" "}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos
				atque accusantium nam eveniet quibusdam quia quas, sequi explicabo hic.
				Distinctio, delectus soluta voluptate accusamus cumque culpa!
				Temporibus, laudantium debitis!
			</p>
		</div>
	);
};

export default About;
