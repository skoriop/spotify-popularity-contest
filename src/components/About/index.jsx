import { loginURL } from "../../middleware/auth";
import "./style.css";

const About = () => {
	return (
		<div className="about-body">
			<h3 className="about-text">
				Which songs from your playlist are more popular?
			</h3>
			<a href={loginURL}>
				<img className="login" alt="Login to Spotify" src="button.png" />
			</a>
		</div>
	);
};

export default About;
